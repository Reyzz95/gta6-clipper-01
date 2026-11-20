const { mkdir, copyFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function deliver() {
  const source = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot', 'VIDEO.json');
  const destination = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
  await mkdir(destination, { recursive: true });
  await copyFile(source, resolve(destination, 'VIDEO.json'));
}

deliver().catch((error) => {
  console.error('Unable to deliver VIDEO.json:', error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
