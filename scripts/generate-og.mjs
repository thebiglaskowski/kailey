import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

const cream = '#F5F1E8';
const creamDeep = '#EAE3D2';
const sageDeep = '#5C7259';
const sage = '#8FA68E';
const tan = '#C9A876';
const ink = '#2C2A26';
const inkSoft = '#5A554B';

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${cream}"/>
      <stop offset="100%" stop-color="${creamDeep}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- decorative sage circle, top right -->
  <circle cx="1080" cy="120" r="180" fill="${sage}" opacity="0.18"/>
  <circle cx="1140" cy="560" r="120" fill="${tan}" opacity="0.18"/>

  <!-- KB monogram mark, top left -->
  <rect x="80" y="80" width="88" height="88" rx="18" fill="${sageDeep}"/>
  <text x="124" y="142" font-family="Georgia, serif" font-size="48" font-weight="600"
        fill="${cream}" text-anchor="middle">KB</text>

  <!-- Eyebrow -->
  <text x="80" y="290" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26"
        font-weight="600" fill="${tan}" letter-spacing="3">MARKETING SPECIALIST · CLASS OF 2026</text>

  <!-- Name -->
  <text x="80" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="108"
        font-weight="700" fill="${sageDeep}">Kailey Blakely</text>

  <!-- Tagline -->
  <text x="80" y="470" font-family="Georgia, 'Times New Roman', serif" font-size="38"
        font-style="italic" fill="${ink}">Patience. Persistence. Perseverance.</text>

  <!-- Subline -->
  <text x="80" y="530" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26"
        fill="${inkSoft}">Brand storytelling · digital strategy · data-driven creative</text>

  <!-- URL -->
  <text x="80" y="590" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22"
        font-weight="500" fill="${sageDeep}">kaileyblakely.com</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png({ compressionLevel: 9 })
  .toFile(resolve(publicDir, 'og-default.png'));
console.log('wrote public/og-default.png');

const appleIconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="${sageDeep}"/>
  <text x="90" y="126" font-family="Georgia, 'Times New Roman', serif" font-size="96"
        font-weight="700" fill="${cream}" text-anchor="middle">KB</text>
</svg>`;

await sharp(Buffer.from(appleIconSvg))
  .png({ compressionLevel: 9 })
  .toFile(resolve(publicDir, 'apple-touch-icon.png'));
console.log('wrote public/apple-touch-icon.png');
