import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';

const stripe = new Stripe(key, {
    apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const dbOrder = await prisma.order.findUnique({
        where: {
            id: body.id,
        },
    });

    if (body.length > 0) {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: `${dbOrder?.total}`,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${request.headers.get('origin')}/?success=true`,
                cancel_url: `${request.headers.get('origin')}/?canceled=true`,
            });
            return NextResponse.json({ session }, { status: 200 });
        } catch (err) {
            return NextResponse.json(err, { status: 500 });
        }
    }
}
