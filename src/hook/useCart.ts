'use client';
import { useState } from 'react';

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
}

// export const context = createContext();

export function useCart() {
    const [cart, setCart] = useState<Cart>(
        localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems') || 'null')
            : []
    );

    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
        setCart(JSON.parse(cartItems));
    }

    const addToCart = (productId: string, quantity: number) => {
        // Find the cart item with the given product Id.
        const cartItem = cart.items.find(
            (item) => item.productId === productId
        );

        //If the cart item exists, increase its quantiy.
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            // If the cart item does not exist, create a new one and add it to the cart.
            cart.items.push({ productId, quantity });
        }

        // Update the cart state.
        setCart({ ...cart });
    };

    const removeFromCart = (productId: string) => {
        // Find the cart item with the given product ID.
        const cartItem = cart.items.find(
            (item) => item.productId === productId
        );

        // If the cart item exists, decrement its quantity.
        if (cartItem) {
            cartItem.quantity--;

            // If the cart item quantity is zero, remove it from the cart.
            if (cartItem.quantity === 0) {
                cart.items.splice(cart.items.indexOf(cartItem), 1);
            }
        }

        // Update the cart state.
        setCart({ ...cart });
    };

    return { cart, addToCart, removeFromCart };
}
