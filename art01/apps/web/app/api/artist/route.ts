import { NextResponse } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const artistSchema = z.object({
  name: z.string(),
  handle: z.string().optional(),
  bio: z.string().optional(),
  contactPref: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsedData = artistSchema.parse(json);

    const data: Prisma.ArtistCreateInput = {
      name: parsedData.name,
    };
    if (parsedData.handle) data.handle = parsedData.handle;
    if (parsedData.bio) data.bio = parsedData.bio;
    if (parsedData.contactPref) data.contactPref = parsedData.contactPref;

    const artist = await prisma.artist.create({
      data,
    });

    return NextResponse.json(artist);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
