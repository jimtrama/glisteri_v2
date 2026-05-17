import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dataSource = await readFile(resolve(root, 'src/Utils/data.js'), 'utf8');
const dataModule = await import(`data:text/javascript;base64,${Buffer.from(dataSource).toString('base64')}`);
const outputDir = resolve(root, 'dist/menu-pdf');

await mkdir(outputDir, { recursive: true });
await writeFile(
  resolve(outputDir, 'menu-data.json'),
  JSON.stringify(dataModule.default, null, 2),
  'utf8',
);
