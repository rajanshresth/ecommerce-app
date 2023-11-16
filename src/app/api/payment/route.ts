import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: '2023-10-16',
});
export default async function handler(req: NextRequest) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: '{{PRICE_ID}}',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers}/?success=true`,
                cancel_url: `${req.headers}/?canceled=true`,
            });
            NextResponse.redirect(session.url || '', {
                status: 303,
            }).json();
        } catch (err) {
            // res.status(err.statusCode || 500).json(err.message);
            NextResponse.json(err, {
                status: 404,
            });
        }
    } else {
        // res.setHeader('Allow', 'POST');
        // res.status(405).end('Method Not Allowed');
        // res.headers('Allow','POST')
    }
}
