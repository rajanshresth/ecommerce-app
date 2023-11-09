import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <footer className='w-full bg-gray-900 py-12 text-white md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            About Our Store
                        </h2>
                        <p className='max-w-[900px] text-gray-300 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            We are a leading ecommerce platform providing
                            quality products to our customers. Our mission is to
                            make shopping easy and convenient for everyone.
                        </p>
                    </div>
                    <Link
                        className='inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90 dark:focus-visible:ring-gray-300'
                        href='/product'
                    >
                        Shop Now
                    </Link>
                </div>
                <div className='mt-8 flex justify-center text-gray-400'>
                    <p>© 2023 Our Store. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default AboutPage;
