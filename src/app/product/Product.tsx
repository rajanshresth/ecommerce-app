import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/server/db/client';
import CartButton from '../cart/_component/add-to-cart';

const ProductView = async () => {
    const dbProduct = await prisma.product.findMany({
        take: 12,
    });

    return (
        <section className='mt-8 grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {dbProduct?.map((product) => (
                <div
                    className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'
                    key={product.id}
                >
                    <Link
                        // className='h-[400px] w-[400px] '
                        href={`product/${product.id}`}
                    >
                        <Image
                            alt='Product 1'
                            className='object-cover'
                            height='400'
                            src={`${product?.image}`}
                            style={{
                                aspectRatio: '400/400',
                                objectFit: 'cover',
                            }}
                            width='400'
                        />
                        <div className='flex-1 p-4'>
                            <h3 className='font-semibold tracking-tight'>
                                {product.name}
                            </h3>
                            <h4 className='font-semibold'>${product.price}</h4>
                        </div>
                    </Link>

                    <CartButton
                        product={{
                            productId: product.id || '',
                            quantity: 1,
                        }}
                    />
                </div>
            ))}
        </section>
    );
};

export default ProductView;
