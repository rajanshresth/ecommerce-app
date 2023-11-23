import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

export default function CheckoutButton() {
    const { cart } = useCart();
    const cartCount = cart.items.map((item) => item.quantity);
    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(
                process.env.STRIPE_SECRET_KEY as string
            );

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cart }),
            });

            const { sessionId } = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({ sessionId });

            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            disabled={cartCount.length === 0}
            className='mr-2 rounded-md border border-transparent bg-sky-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 disabled:bg-gray-600'
            onClick={() => cartCount.length > 0 && redirectToCheckout()}
        >
            Checkout
        </button>
    );
}
