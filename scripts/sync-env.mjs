import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2];

const targets = {
  catalog: {
    envPath: resolve(rootDir, '.env'),
    outputPath: resolve(rootDir, 'src/environments/runtime-config.ts'),
    entries: [
      {
        envKey: 'CATALOG_BACKEND_URL',
        configKey: 'catalogBackendUrl',
      },
    ],
  },
  admin: {
    envPath: resolve(rootDir, 'admin/.env'),
    outputPath: resolve(rootDir, 'admin/src/environments/runtime-config.ts'),
    entries: [
      {
        envKey: 'ADMIN_BACKEND_URL',
        configKey: 'adminBackendUrl',
      },
    ],
  },
};

function parseEnvFile(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const env = {};

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

    env[key] = value;
  }

  return env;
}

function generateConfigSource(config, envValues) {
  const lines = [
    '// Auto-generated from .env by scripts/sync-env.mjs',
    'export const runtimeConfig = {',
  ];

  for (const entry of config.entries) {
    const value = envValues[entry.envKey];

    if (!value) {
      throw new Error(`Missing required env key "${entry.envKey}" in ${config.envPath}`);
    }

    lines.push(`  ${entry.configKey}: ${JSON.stringify(value)},`);
  }

  lines.push('} as const;');
  lines.push('');

  return lines.join('\n');
}

const config = targets[target];

if (!config) {
  throw new Error(`Unknown env sync target: ${target ?? '(none)'}`);
}

const envValues = parseEnvFile(config.envPath);
const source = generateConfigSource(config, envValues);

mkdirSync(dirname(config.outputPath), { recursive: true });
writeFileSync(config.outputPath, source, 'utf8');
