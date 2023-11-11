// CartPage component
import prisma from '@/server/db/client';
import React from 'react';
import CartButton from './_component/add-to-cart';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

const CartPage: React.FC = async () => {
    const dbProduct = await prisma.product.findUnique({
        where: {
            id: 'clor142a90000et2gnu1o33xu',
        },
    });

    return (
        <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-2xl font-bold'>Cart Page</h1>
            <CartButton product={dbProduct as Product} />
        </div>
    );
};

export default CartPage;
