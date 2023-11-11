import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/server/db/client';
import ProductCart from './_component/product-cart';
import { CartProvider } from '@/context/CartContext';
import CartButton from '../cart/_component/add-to-cart';
import { Product } from '../cart/page';

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
                        className='absolute inset-0 z-10'
                        href={`product/${product.id}`}
                    >
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
                    <CartButton product={product as Product} />
                </div>
            ))}
        </section>
    );
};

export default ProductView;
