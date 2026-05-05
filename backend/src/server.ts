import { randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { resolve } from 'node:path';
import { Server as SocketIOServer } from 'socket.io';

type CallWaiterPayload = {
  sunbedNumber?: number | string;
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
const waiterCallHistory: WaiterCallEvent[] = [];

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
    }, requestOrigin);
    return;
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

      sendJson(response, 200, {
        ok: true,
        message: `Waiter request received for sunbed ${sunbedNumber}.`,
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
});
