import { Button } from '@/components/ui/button';
import ProductView from './product/Product';
import Link from 'next/link';
import AboutPage from './about/page';

export default async function Home() {
    return (
        <div>
            <section className='rounded-lg bg-blue-500 p-6 text-white shadow-md dark:bg-zinc-950'>
                <h2 className='mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
                    Welcome to Our Store!
                </h2>
                <p className='mb-4 text-lg md:text-xl lg:text-2xl'>
                    Explore our collection of high-quality products.
                </p>
                <Link href='/product' passHref>
                    <Button
                        className='bg-white text-blue-500 dark:bg-white dark:text-zinc-950'
                        variant='outline'
                    >
                        Shop Now
                    </Button>
                </Link>
            </section>
            <ProductView />
            <section>
                <AboutPage />
            </section>
        </div>
    );
}
