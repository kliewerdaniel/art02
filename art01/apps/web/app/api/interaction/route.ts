import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const interactionSchema = z.object({
  artistId: z.string(),
  volunteerId: z.string(),
  type: z.string(),
  quantity: z.number().optional(),
  money: z.number().optional(),
  notes: z.string().optional(),
  location: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { artistId, volunteerId, type, quantity, money, notes, location } = interactionSchema.parse(json);

    // Workaround for buggy Prisma types that require fields with defaults
    const data: any = {
      artistId,
      volunteerId,
      type,
      timestamp: new Date(),
    };

    if (quantity !== undefined) data.quantity = quantity;
    if (money !== undefined) data.money = money;
    if (notes !== undefined) data.notes = notes;
    if (location !== undefined) data.location = location;

    const interaction = await prisma.interaction.create({
      data,
    });

    return NextResponse.json(interaction);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
