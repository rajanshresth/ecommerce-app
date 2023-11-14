'use client';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
}
interface CartContextProps {
    cart: Cart;
    addToCart: (productId: string, quantity: number) => void;
    removeFromCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
    undefined
);

export const CartProvider: React.FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren) => {
    const [cart, setCart] = useState<Cart>({ items: [] });

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
        console.log('Quantity', cartItem?.quantity);

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
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}
