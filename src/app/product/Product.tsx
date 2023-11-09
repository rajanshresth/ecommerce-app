import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/server/db/client';

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
                    <Link className='absolute inset-0 z-10' href='#'>
                        <span className='sr-only'>View Product</span>
                    </Link>
                    <Image
                        alt='Product 1'
                        className='h-60 w-full object-cover'
                        height='400'
                        src={`${product?.image}`}
                        style={{
                            aspectRatio: '400/400',
                            objectFit: 'cover',
                        }}
                        width='400'
                    />
                    <div className='bg-white p-4 dark:bg-zinc-950'>
                        <h3 className='text-lg font-semibold md:text-xl'>
                            {product?.name}
                        </h3>
                        <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                            ${product?.price}
                        </p>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            ))}

            {/* <div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
                <Link className='absolute inset-0 z-10' href='#'>
                    <span className='sr-only'>View Product</span>
                </Link>
                <Image
                    alt='Product 1'
                    className='h-60 w-full object-cover'
                    height='400'
                    src={`${dbProduct?.image}`}
                    style={{
                        aspectRatio: '400/400',
                        objectFit: 'cover',
                    }}
                    width='400'
                />
                <div className='bg-white p-4 dark:bg-zinc-950'>
                    <h3 className='text-lg font-semibold md:text-xl'>
                        {dbProduct?.name}
                    </h3>
                    <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                        ${dbProduct?.price}
                    </p>
                    <Button>Add to Cart</Button>
                </div>
            </div> */}
        </section>
    );
};

export default ProductView;
