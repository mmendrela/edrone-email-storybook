import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const templateDir = '.';
const outputDir = './public/images';

// Find all HTML files
const htmlFiles = readdirSync(templateDir).filter(f => f.endsWith('.html'));

let imageCount = 0;
const imageMap = new Map();

htmlFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  const content = readFileSync(join(templateDir, file), 'utf8');

  // Extract base64 images
  const regex = /src="data:image\/(jpeg|jpg|png|gif|webp);base64,([^"]+)"/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const [fullMatch, format, base64Data] = match;

    // Skip if already extracted
    if (imageMap.has(base64Data.substring(0, 100))) {
      continue;
    }

    imageCount++;
    const filename = `${file.replace('.html', '')}-img${imageCount}.${format === 'jpeg' ? 'jpg' : format}`;
    const filepath = join(outputDir, filename);

    // Decode base64 and write to file
    try {
      const buffer = Buffer.from(base64Data, 'base64');
      writeFileSync(filepath, buffer);
      console.log(`  ✓ Saved: ${filename} (${(buffer.length / 1024).toFixed(2)} KB)`);

      imageMap.set(base64Data.substring(0, 100), filename);
    } catch (error) {
      console.error(`  ✗ Error saving ${filename}:`, error.message);
    }
  }
});

console.log(`\nTotal images extracted: ${imageCount}`);
console.log('\nImage map saved to: image-map.json');

// Save mapping for reference
writeFileSync('./image-map.json', JSON.stringify(Object.fromEntries(imageMap), null, 2));
