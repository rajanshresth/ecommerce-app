import { OrderSchema } from '@/lib/validation/Order_schema';
import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

type orderItem = z.infer<typeof OrderSchema>;

export async function POST(request: NextRequest) {
    const body: orderItem = await request.json();
    const { productId, quantity, price } = body;

    const validation = OrderSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }
    // if (!order) return null;
    const createOrderItem = await prisma.orderItem.create({
        data: {
            productId,
            quantity,
            price,
        },
    });
    return NextResponse.json(createOrderItem, { status: 201 });
}
