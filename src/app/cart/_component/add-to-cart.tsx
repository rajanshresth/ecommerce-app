'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../../hook/useCart';
import { usePathname } from 'next/navigation';

interface Props {
    product: {
        id: string;
        name: string;
        price: number;
        description: string;
        image: string;
    };
}

const CartButton = ({ product }: Props) => {
    const currentPathname = usePathname();
    console.log('currentPathname:', currentPathname);
    const { cart, addToCart, removeFromCart } = useCart();
    console.log('cart:', cart);
    //get product id
    const productId = product.id;

    //function to add to cart
    const handleAddToCart = () => {
        addToCart(productId, 1);
    };

    //function to remove from cart
    const handleRemoveFromCart = () => {
        removeFromCart(productId);
    };

    return (
        <div className='flex items-center space-x-6'>
            <div className='flex flex-col space-y-6'>
                <Button onClick={handleAddToCart}>Add to Cart</Button>

                {currentPathname === '/cart' && (
                    <Button onClick={handleRemoveFromCart}>
                        Remove from Cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CartButton;
