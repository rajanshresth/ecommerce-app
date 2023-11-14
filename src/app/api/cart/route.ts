import prisma from '@/server/db/client';
import { NextResponse } from 'next/server';

export async function POST(request: NextResponse) {
    const orderItems = await request.json();

    if (!orderItems) {
        return null;
    }

    const createdOrderItems = await prisma.orderItem.create({
        data: orderItems,
    });

    return NextResponse.json(createdOrderItems, { status: 201 });
}
