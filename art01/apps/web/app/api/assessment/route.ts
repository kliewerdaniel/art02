import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const assessmentSchema = z.object({
  artistId: z.string(),
  type: z.string(),
  answers: z.any(),
  score: z.number(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { artistId, type, answers, score } = assessmentSchema.parse(json);

    const assessment = await prisma.assessment.create({
      data: {
        artistId,
        type,
        answers,
        score,
      },
    });

    return NextResponse.json(assessment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
