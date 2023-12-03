'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CartButton from '../cart/_component/add-to-cart';

export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}

const SearchPage = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q');
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await fetch(`/api/search/${searchQuery}`);
                const products: Product[] = await response.json();
                setProducts(products);
            } catch (error) {
                console.log('Error: ', error);
            }
        };
        handleSearch();
    }, [searchQuery]);

    return (
        <div className='mt-8 grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products?.map((product) => (
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
                            productId: product?.id,
                            quantity: 1,
                            price: product.price,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default SearchPage;
