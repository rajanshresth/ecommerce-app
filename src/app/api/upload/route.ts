// import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

interface bodyImage {
    data: {
        image: string;
    };
}
export async function POST(request: NextRequest) {
    const body: bodyImage = await request.json();
    if (!body) return;
    const dbImage = '';
    return NextResponse.json(dbImage);
}
