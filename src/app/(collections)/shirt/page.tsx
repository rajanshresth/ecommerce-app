import CartButton from '@/app/cart/_component/add-to-cart';
import prisma from '@/server/db/client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ShirtPage = async () => {
    const dbShirt = await prisma.product.findMany({
        where: {
            category: 'TShirt',
        },
    });

    return (
        <div className='grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {dbShirt.map((dbProduct) => (
                <div className='group relative' key={dbProduct.id}>
                    <Link href={`product/${dbProduct.id}`}>
                        <Image
                            alt='Product 1'
                            className='aspect-square w-full rounded-lg object-cover transition-opacity group-hover:opacity-50'
                            height='200'
                            src={dbProduct.image}
                            width='200'
                        />
                        <div className='flex-1 py-4'>
                            <h3 className='font-semibold tracking-tight'>
                                {dbProduct.name}
                            </h3>
                            <h4 className='font-semibold'>
                                ${dbProduct.price}
                            </h4>
                        </div>
                    </Link>
                    <CartButton
                        product={{
                            productId: dbProduct.id,
                            quantity: 1,
                            price: dbProduct.price,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ShirtPage;
