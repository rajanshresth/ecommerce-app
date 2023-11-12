'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

interface Props {
    product: {
        id: string;
        name: string;
        price: number;
        description: string;
        image: string;
    };
}

const CartButton = ({ ...product }: Props) => {
    const currentPathname = usePathname();
    console.log('currentPathname:', currentPathname);
    const { addToCart, removeFromCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product.product.id, 1);
    };
    const handleRemoveFromCart = () => {
        removeFromCart(product.product.id);
    };

    return (
        <div className='flex items-center space-x-6'>
            <div className='flex flex-col space-y-6'>
                <Button onClick={handleAddToCart}>Add to Cart</Button>

                {currentPathname === '/cart' && (
                    <>
                        <p>Name: {product.product.name}</p>
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
