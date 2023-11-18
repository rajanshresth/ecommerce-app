import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { orderItem } = body;

    if (!orderItem) {
        return null;
    }

    const createdOrderItems = await prisma.orderItem.create({
        data: orderItem,
    });
    return NextResponse.json(createdOrderItems, { status: 201 });
}
