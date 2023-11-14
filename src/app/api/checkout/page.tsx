import { useCart } from '@/hook/useCart';
import React from 'react';

const CheckoutPage = () => {
    const { cart } = useCart();
    console.log(cart);
    return <div>CheckoutPage</div>;
};

export default CheckoutPage;
