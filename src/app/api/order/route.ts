import prisma from '@/server/db/client';
import { OrderItem } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { order } = body;

    // if (!order) return null;
    const createOrderItem = await prisma.orderItem.create({
        data: order,
    });
    return NextResponse.json(createOrderItem, { status: 201 });
}
