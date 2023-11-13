import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const dbProduct = await prisma.product.findUnique({
        where: {
            id: params.id,
        },
    });
    return NextResponse.json(dbProduct, { status: 200 });
}
