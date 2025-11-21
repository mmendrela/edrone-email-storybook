import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const templateDir = '.';
const outputDir = './public/images';

// Process one specific template to get all images including products
const file = 'muve-5645-cosy.html';
console.log(`Processing ${file}...`);

const content = readFileSync(join(templateDir, file), 'utf8');

// Extract ALL base64 images
const regex = /src="data:image\/(jpeg|jpg|png|gif|webp);base64,([^"]+)"/g;
let match;
let imageCount = 0;
const images = [];

while ((match = regex.exec(content)) !== null) {
  const [fullMatch, format, base64Data] = match;
  imageCount++;

  const filename = `${file.replace('.html', '')}-img${imageCount}.${format === 'jpeg' ? 'jpg' : format}`;
  const filepath = join(outputDir, filename);

  // Decode base64 and write to file
  try {
    const buffer = Buffer.from(base64Data, 'base64');
    writeFileSync(filepath, buffer);
    const sizeKB = (buffer.length / 1024).toFixed(2);
    console.log(`  ✓ Image ${imageCount}: ${filename} (${sizeKB} KB)`);

    images.push({
      filename,
      size: sizeKB,
      type: format
    });
  } catch (error) {
    console.error(`  ✗ Error saving ${filename}:`, error.message);
  }
}

console.log(`\nTotal images in ${file}: ${imageCount}`);
console.log('\nImage list:');
images.forEach((img, idx) => {
  console.log(`${idx + 1}. ${img.filename} (${img.size} KB)`);
});
