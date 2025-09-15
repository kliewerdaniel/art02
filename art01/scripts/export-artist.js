#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const prisma = new PrismaClient();

async function exportArtist(artistId) {
  // 1. Fetch artist data from the database
  const artist = await prisma.artist.findUnique({
    where: { id: artistId },
    include: { artworks: true },
  });

  if (!artist) {
    console.error(`Artist with ID ${artistId} not found.`);
    return;
  }

  // 2. Generate static HTML/CSS for the artist's profile and gallery
  const outputDir = path.join(__dirname, '..', 'public', 'exports', artist.handle || artist.id);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // (Placeholder for static site generation logic)
  const htmlContent = `
    <html>
      <head><title>${artist.name}</title></head>
      <body>
        <h1>${artist.name}</h1>
        <p>${artist.bio}</p>
        <h2>Artworks</h2>
        ${artist.artworks.map(art => `<img src="${art.imagePath}" alt="${art.title}" />`).join('')}
      </body>
    </html>
  `;
  fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

  // 3. Create a ZIP archive of the generated site
  const zipPath = path.join(outputDir, `${artist.handle || artist.id}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip');

  output.on('close', () => {
    console.log(`Exported site for ${artist.name} to ${zipPath}`);
  });

  archive.pipe(output);
  archive.directory(outputDir, false);
  archive.finalize();
}

const artistId = process.argv[2];
if (!artistId) {
  console.error('Usage: ./export-artist.js <artistId>');
  process.exit(1);
}

exportArtist(artistId).catch(e => {
  console.error(e);
  process.exit(1);
});
