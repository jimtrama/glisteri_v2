import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { dirname, resolve } from 'node:path';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getMessaging, type Messaging } from 'firebase-admin/messaging';
import { Server as SocketIOServer } from 'socket.io';

type CallWaiterPayload = {
  sunbedNumber?: number | string;
};

type DeviceTokenPayload = {
  token?: string;
};

type WaiterCallEvent = {
  id: string;
  sunbedNumber: string;
  receivedAt: string;
};

function loadBackendEnvFile(): void {
  const envPath = resolve(process.cwd(), '.env');

  if (!existsSync(envPath)) {
    return;
  }

  const raw = readFileSync(envPath, 'utf8');

  for (const line of raw.split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    let value = trimmedLine.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadBackendEnvFile();

const PORT = Number(process.env.BACKEND_PORT ?? process.env.PORT ?? 3001);
const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN ?? 'http://localhost:4200,http://localhost:4201')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const DEVICE_TOKENS_FILE = resolve(process.cwd(), process.env.DEVICE_TOKENS_FILE ?? 'data/device-tokens.txt');
const FIREBASE_SERVICE_ACCOUNT_PATH = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim()
  ? resolve(process.cwd(), process.env.FIREBASE_SERVICE_ACCOUNT_PATH.trim())
  : '';
const FIREBASE_ANDROID_CHANNEL_ID = process.env.FIREBASE_ANDROID_CHANNEL_ID?.trim() || 'waiter_requests';
const waiterCallHistory: WaiterCallEvent[] = [];
const deviceTokens = loadDeviceTokens();
const firebaseMessaging = createFirebaseMessaging();

function ensureTextFile(filePath: string): void {
  const folderPath = dirname(filePath);

  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }

  if (!existsSync(filePath)) {
    writeFileSync(filePath, '', 'utf8');
  }
}

function loadDeviceTokens(): Set<string> {
  ensureTextFile(DEVICE_TOKENS_FILE);

  const tokens = readFileSync(DEVICE_TOKENS_FILE, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return new Set(tokens);
}

function persistDeviceTokens(): void {
  ensureTextFile(DEVICE_TOKENS_FILE);
  writeFileSync(DEVICE_TOKENS_FILE, `${Array.from(deviceTokens).join('\n')}${deviceTokens.size ? '\n' : ''}`, 'utf8');
}

function createFirebaseMessaging(): Messaging | null {
  if (!FIREBASE_SERVICE_ACCOUNT_PATH) {
    console.warn('[firebase] FIREBASE_SERVICE_ACCOUNT_PATH is not configured. Push notifications are disabled.');
    return null;
  }

  if (!existsSync(FIREBASE_SERVICE_ACCOUNT_PATH)) {
    console.warn(`[firebase] Service account file not found at ${FIREBASE_SERVICE_ACCOUNT_PATH}. Push notifications are disabled.`);
    return null;
  }

  try {
    const raw = readFileSync(FIREBASE_SERVICE_ACCOUNT_PATH, 'utf8');
    const serviceAccount = JSON.parse(raw) as {
      project_id: string;
      client_email: string;
      private_key: string;
    };

    const app = getApps()[0] ?? initializeApp({
      credential: cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
      }),
    });

    console.log(`[firebase] Messaging ready for project ${serviceAccount.project_id}`);
    return getMessaging(app);
  } catch (error) {
    console.error('[firebase] Failed to initialize Firebase Admin.', error);
    return null;
  }
}

function removeDeviceTokens(tokensToRemove: string[]): void {
  if (!tokensToRemove.length) {
    return;
  }

  let changed = false;

  for (const token of tokensToRemove) {
    if (deviceTokens.delete(token)) {
      changed = true;
    }
  }

  if (changed) {
    persistDeviceTokens();
  }
}

async function sendWaiterPushNotification(sunbedNumber: string): Promise<{ attempted: number; delivered: number; removedTokens: number; skipped: boolean }> {
  if (!firebaseMessaging) {
    return {
      attempted: 0,
      delivered: 0,
      removedTokens: 0,
      skipped: true,
    };
  }

  const tokens = Array.from(deviceTokens);

  if (!tokens.length) {
    return {
      attempted: 0,
      delivered: 0,
      removedTokens: 0,
      skipped: true,
    };
  }

  const response = await firebaseMessaging.sendEachForMulticast({
    tokens,
    notification: {
      title: 'New waiter request',
      body: `Sunbed ${sunbedNumber} requested service.`,
    },
    data: {
      title: 'New waiter request',
      body: `Sunbed ${sunbedNumber} requested service.`,
      type: 'waiter_call',
      sunbedNumber,
      sentAt: new Date().toISOString(),
    },
    android: {
      priority: 'high',
      notification: {
        channelId: FIREBASE_ANDROID_CHANNEL_ID,
        sound: 'default',
      },
    },
  });

  const tokensToRemove: string[] = [];

  response.responses.forEach((result, index) => {
    if (result.success) {
      return;
    }

    const errorCode = result.error?.code ?? '';

    if (
      errorCode === 'messaging/registration-token-not-registered' ||
      errorCode === 'messaging/invalid-registration-token'
    ) {
      tokensToRemove.push(tokens[index]);
    }

    console.error(`[firebase] Failed to deliver push to token ${index + 1}/${tokens.length}`, result.error);
  });

  removeDeviceTokens(tokensToRemove);

  return {
    attempted: tokens.length,
    delivered: response.successCount,
    removedTokens: tokensToRemove.length,
    skipped: false,
  };
}

function resolveCorsOrigin(origin?: string): string {
  if (ALLOWED_ORIGINS.includes('*')) {
    return '*';
  }

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return origin;
  }

  return ALLOWED_ORIGINS[0] ?? '*';
}

function applyCorsHeaders(response: ServerResponse, origin?: string): void {
  response.setHeader('Access-Control-Allow-Origin', resolveCorsOrigin(origin));
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(response: ServerResponse, statusCode: number, payload: unknown, origin?: string): void {
  applyCorsHeaders(response, origin);
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
  });
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request: IncomingMessage): Promise<CallWaiterPayload> {
  return await new Promise<CallWaiterPayload>((resolve, reject) => {
    let rawBody = '';

    request.on('data', (chunk: Buffer) => {
      rawBody += chunk.toString();
    });

    request.on('end', () => {
      if (!rawBody) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(rawBody) as CallWaiterPayload);
      } catch (error) {
        reject(error);
      }
    });

    request.on('error', reject);
  });
}

const httpServer = createServer(async (request, response) => {
  const requestOrigin = request.headers.origin;
  const requestUrl = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
  applyCorsHeaders(response, requestOrigin);

  if (request.method === 'OPTIONS') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === 'GET' && requestUrl.pathname === '/health') {
    sendJson(response, 200, {
      ok: true,
      service: 'glisteri-backend',
      registeredDevices: deviceTokens.size,
    }, requestOrigin);
    return;
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/devices/register') {
    sendJson(response, 200, {
      ok: true,
      registeredDevices: deviceTokens.size,
    }, requestOrigin);
    return;
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/call-waiter') {
    sendJson(response, 200, {
      ok: true,
      requests: waiterCallHistory,
    }, requestOrigin);
    return;
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/devices/register') {
    try {
      const payload = await readJsonBody(request) as DeviceTokenPayload;
      const token = String(payload.token ?? '').trim();

      if (!token) {
        sendJson(response, 400, {
          ok: false,
          message: 'Device token is required.',
        }, requestOrigin);
        return;
      }

      const alreadyRegistered = deviceTokens.has(token);
      deviceTokens.add(token);
      persistDeviceTokens();

      sendJson(response, 200, {
        ok: true,
        message: alreadyRegistered ? 'Device token already registered.' : 'Device token registered.',
        registeredDevices: deviceTokens.size,
      }, requestOrigin);
      return;
    } catch (error) {
      console.error('[device-register] Invalid request body', error);
      sendJson(response, 400, {
        ok: false,
        message: 'Invalid JSON payload.',
      }, requestOrigin);
      return;
    }
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/devices/unregister') {
    try {
      const payload = await readJsonBody(request) as DeviceTokenPayload;
      const token = String(payload.token ?? '').trim();

      if (!token) {
        sendJson(response, 400, {
          ok: false,
          message: 'Device token is required.',
        }, requestOrigin);
        return;
      }

      const removed = deviceTokens.delete(token);

      if (removed) {
        persistDeviceTokens();
      }

      sendJson(response, 200, {
        ok: true,
        message: removed ? 'Device token removed.' : 'Device token was not registered.',
        registeredDevices: deviceTokens.size,
      }, requestOrigin);
      return;
    } catch (error) {
      console.error('[device-unregister] Invalid request body', error);
      sendJson(response, 400, {
        ok: false,
        message: 'Invalid JSON payload.',
      }, requestOrigin);
      return;
    }
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/call-waiter') {
    try {
      const payload = await readJsonBody(request);
      const sunbedNumber = String(payload.sunbedNumber ?? '').trim();

      if (!sunbedNumber) {
        sendJson(response, 400, {
          ok: false,
          message: 'Sunbed number is required.',
        }, requestOrigin);
        return;
      }

      const eventPayload: WaiterCallEvent = {
        id: randomUUID(),
        sunbedNumber,
        receivedAt: new Date().toISOString(),
      };

      waiterCallHistory.unshift(eventPayload);
      waiterCallHistory.splice(25);

      console.log(`[waiter-call] Sunbed ${sunbedNumber}`);
      io.emit('waiter:called', eventPayload);

      const pushResult = await sendWaiterPushNotification(sunbedNumber);

      if (pushResult.skipped) {
        console.log('[firebase] Push skipped: Firebase not configured or no registered device tokens.');
      } else {
        console.log(
          `[firebase] Push sent for sunbed ${sunbedNumber}. Delivered ${pushResult.delivered}/${pushResult.attempted}, removed ${pushResult.removedTokens} invalid token(s).`
        );
      }

      sendJson(response, 200, {
        ok: true,
        message: `Waiter request received for sunbed ${sunbedNumber}.`,
        push: pushResult,
      }, requestOrigin);
      return;
    } catch (error) {
      console.error('[waiter-call] Invalid request body', error);
      sendJson(response, 400, {
        ok: false,
        message: 'Invalid JSON payload.',
      }, requestOrigin);
      return;
    }
  }

  if (request.method === 'DELETE' && requestUrl.pathname.startsWith('/api/call-waiter/')) {
    const callId = decodeURIComponent(requestUrl.pathname.replace('/api/call-waiter/', '')).trim();
    const callIndex = waiterCallHistory.findIndex((call) => call.id === callId);

    if (!callId || callIndex === -1) {
      sendJson(response, 404, {
        ok: false,
        message: 'Waiter request not found.',
      }, requestOrigin);
      return;
    }

    waiterCallHistory.splice(callIndex, 1);
    io.emit('waiter:removed', { id: callId });

    sendJson(response, 200, {
      ok: true,
      message: 'Waiter request removed.',
    }, requestOrigin);
    return;
  }

  sendJson(response, 404, {
    ok: false,
    message: 'Route not found.',
  }, requestOrigin);
});

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: ALLOWED_ORIGINS.includes('*') ? true : ALLOWED_ORIGINS,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`[socket] Client connected: ${socket.id}`);
  socket.emit('waiter:history', waiterCallHistory);

  socket.on('disconnect', () => {
    console.log(`[socket] Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Glisteri backend listening on http://localhost:${PORT}`);
  console.log(`Socket server ready for origins ${ALLOWED_ORIGINS.join(', ')}`);
  console.log(`Device token store: ${DEVICE_TOKENS_FILE} (${deviceTokens.size} registered)`);
});
