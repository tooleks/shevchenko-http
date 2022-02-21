import * as fs from 'fs/promises';

/**
 * Returns shevchenko package metadata.
 */
export async function getShevchenkoMetadata() {
  const content = await fs.readFile('./node_modules/shevchenko/package.json');
  const metadata = JSON.parse(content);
  return { version: metadata.version };
}
