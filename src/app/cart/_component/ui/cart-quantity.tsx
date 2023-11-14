import { useCart } from '@/context/CartContext';
import React from 'react';

const CartQuantity = () => {
    const { cart } = useCart();

    // If cart is not available or cart quantity is zero, return null
    if (
        !cart ||
        cart.items.reduce((acc, item) => acc + item.quantity, 0) === 0
    ) {
        return null;
    }

    // Render the cart quantity
    return (
        <div className='absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/4 transform items-center justify-center rounded-full bg-blue-500 text-xs text-white'>
            {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
    );
};

export default CartQuantity;
