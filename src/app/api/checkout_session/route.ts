import { OrderSchema } from '@/lib/validation/Order_schema';
import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { headers } from 'next/headers';
import { CartItem } from '@/context/CartContext';
import stripe from '@/lib/stripe/stripe';

export async function POST(request: NextRequest) {
    const headersList = headers();
    const body: CartItem = await request.json();
    const { productId, quantity, price } = body;
    const cartDetailsArray: CartItem[] = Object.values(body) as CartItem[];
    const validation = OrderSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }
    const lineItems = cartDetailsArray.map((item: CartItem) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.productId,
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        };
    });

    // if (!order) return null;
    await prisma.orderItem.create({
        data: {
            productId,
            quantity,
            price,
        },
    });
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${headersList.get('origin')}/thank-you`,
            cancel_url: `${headersList.get('origin')}/`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Error creating checkout session' });
    }
}
