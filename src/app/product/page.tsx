import Products from './_component/product';
import FilterProduct from './_component/Filter';
import { Product } from '@prisma/client';

interface Props {
    searchParams: {
        searchParams: {
            categrory: Category;
            orderBy: keyof Product;
        };
    };
}

interface Category {}

export default function Component() {
    return (
        <section className='container mx-auto grid items-start gap-6 px-4 py-6 md:grid-cols-[1fr_3fr] md:px-6'>
            <FilterProduct />
            <Products />
        </section>
    );
}
