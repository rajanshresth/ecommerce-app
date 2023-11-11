'use client';
import CartItem from '@/app/cart/_component/add-to-cart';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import React from 'react';

interface Props {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
    };
}
const ProductCart = ({ product }: Props) => {
    const { addToCart } = useCart();
    console.log('Cart', addToCart);
    return (
        <div className='bg-white p-4 dark:bg-zinc-950'>
            {/* <h3 className='text-lg font-semibold md:text-xl'>
                {product?.name}
            </h3>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                ${product?.price}
            </p> */}
            <CartItem product={product} />
        </div>
    );
};

export default ProductCart;
