'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { CartItem, useCart } from '@/context/CartContext';

interface Props {
    product: CartItem;
}

const CartButton = ({ product }: Props) => {
    const currentPathname = usePathname();
    const { addToCart, removeFromCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product.productId, 1);
    };
    const handleRemoveFromCart = () => {
        removeFromCart(product.productId);
    };

    return (
        <div className='mb-4 ml-4 flex items-center space-x-6'>
            <div className='flex flex-col space-y-6'>
                <Button onClick={handleAddToCart}>Add to Cart</Button>

                {currentPathname === '/cart' && (
                    <>
                        <Button onClick={handleRemoveFromCart}>
                            Remove from Cart
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartButton;