#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const prisma = new PrismaClient();

async function importData(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  let records;
  if (ext === '.csv') {
    records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
  } else if (ext === '.json') {
    records = JSON.parse(fileContent);
  } else {
    console.error('Unsupported file type. Please use CSV or JSON.');
    return;
  }

  // This is a generic importer. You might need to adapt it
  // based on which model you are importing data for.
  // This example assumes importing artists.
  for (const record of records) {
    // Basic data transformation/validation
    const artistData = {
      name: record.name,
      handle: record.handle,
      bio: record.bio,
      contactPref: record.contactPref,
    };

    await prisma.artist.create({
      data: artistData,
    });
  }

  console.log(`Imported ${records.length} records from ${filePath}`);
}

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: ./import-data.js <path-to-csv-or-json-file>');
  process.exit(1);
}

importData(filePath).catch(e => {
  console.error(e);
  process.exit(1);
});
