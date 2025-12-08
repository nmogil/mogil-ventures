import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QUALITY = 80;

async function convertToWebP(inputPath, outputPath) {
  const stats = await sharp(inputPath).metadata();
  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const inputSize = (await sharp(inputPath).toBuffer()).length;
  const outputSize = (await sharp(outputPath).toBuffer()).length;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

  console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${savings}% smaller)`);
}

async function processDirectory(dir) {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);

    if (file.isDirectory()) {
      await processDirectory(fullPath);
    } else if (extname(file.name).toLowerCase() === '.png') {
      const webpPath = fullPath.replace(/\.png$/i, '.webp');
      await convertToWebP(fullPath, webpPath);
    }
  }
}

const imagesDir = join(__dirname, '..', 'public', 'images');
console.log('Converting PNG images to WebP...\n');
await processDirectory(imagesDir);
console.log('\nDone!');
