import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import prisma from '@/server/db/client';
import { Button } from '@/components/ui/button';

const Product = async () => {
    const dbProduct = await prisma.product.findMany();
    return (
        <main className='grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {dbProduct.map((product) => (
                <div className='group relative' key={product.id}>
                    <Link href={`product/${product.id}`}>
                        <Image
                            alt='Product 1'
                            className='aspect-square w-full rounded-lg object-cover transition-opacity group-hover:opacity-50'
                            height='200'
                            src={product.image}
                            width='200'
                        />
                        <div className='flex-1 py-4'>
                            <h3 className='font-semibold tracking-tight'>
                                {product.name}
                            </h3>
                            <h4 className='font-semibold'>${product.price}</h4>
                        </div>
                    </Link>
                    <Button>Add to cart</Button>
                </div>
            ))}
        </main>
    );
};

export default Product;
