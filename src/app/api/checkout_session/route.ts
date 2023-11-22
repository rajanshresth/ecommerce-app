import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';

const stripe = new Stripe(key, {
    apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const dbOrderItems = await prisma.orderItem.findUnique({
        where: {
            id: body.id,
        },
    });

    if (dbOrderItems) {
        try {
            const price = dbOrderItems.price;
            const quantity = dbOrderItems.quantity;

            if (price === undefined || quantity === undefined) {
                return NextResponse.json(
                    { error: 'Invalid order item data' },
                    { status: 400 }
                );
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: `${price}`,
                        quantity: Number(`${quantity}`),
                    },
                ],
                mode: 'payment',
                success_url: `${request.headers.get('origin')}/?success=true`,
                cancel_url: `${request.headers.get('origin')}/?canceled=true`,
            });
            console.log('session-stripe', session);

            return NextResponse.json({ session }, { status: 200 });
        } catch (err) {
            return NextResponse.json(err, { status: 500 });
        }
    } else {
        return NextResponse.json(
            { error: 'Order item not found' },
            { status: 404 }
        );
    }
}
