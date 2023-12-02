'use client';
import { useSearchParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
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
        <div>
            <div>
                {products?.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
