import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const allocationSchema = z.object({
  volunteerId: z.string(),
  artistId: z.string(),
  timeMinutes: z.number().optional(),
  moneyCents: z.number().optional(),
  purpose: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { volunteerId, artistId, timeMinutes, moneyCents, purpose } = allocationSchema.parse(json);

    const data: any = {
      volunteerId,
      artistId,
    };

    if (timeMinutes !== undefined) data.timeMinutes = timeMinutes;
    if (moneyCents !== undefined) data.moneyCents = moneyCents;
    if (purpose !== undefined) data.purpose = purpose;

    const allocation = await prisma.allocation.create({
      data,
    });

    return NextResponse.json(allocation);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
