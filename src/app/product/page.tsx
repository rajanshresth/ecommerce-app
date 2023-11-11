import {
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
    Accordion,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/server/db/client';
import CartButton from '../cart/_component/add-to-cart';
import { Product } from '../cart/page';

export default async function Component() {
    const dbProduct = await prisma.product.findMany();
    return (
        <section className='container mx-auto grid items-start gap-6 px-4 py-6 md:grid-cols-[1fr_3fr] md:px-6'>
            <aside className='flex flex-col gap-4'>
                <h2 className='text-lg font-bold'>Filters</h2>
                <Accordion className='w-full' collapsible type='single'>
                    <AccordionItem value='category'>
                        <AccordionTrigger className='text-base'>
                            Category
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='grid gap-2'>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='category-1' />
                                    Category 1{'\n                          '}
                                </Label>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='category-2' />
                                    Category 2{'\n                          '}
                                </Label>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='category-3' />
                                    Category 3{'\n                          '}
                                </Label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='price'>
                        <AccordionTrigger className='text-base'>
                            Price
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='grid gap-2'>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='price-1' />
                                    $0 - $50{'\n                          '}
                                </Label>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='price-2' />
                                    $51 - $100{'\n                          '}
                                </Label>
                                <Label className='flex items-center gap-2 font-normal'>
                                    <Checkbox id='price-3' />
                                    $101 - $150{'\n                          '}
                                </Label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </aside>
            <main className='grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                {dbProduct.map((product) => (
                    <div className='group relative' key={product.id}>
                        <Link
                            className='absolute inset-0 z-10'
                            href={`product/${product.id}`}
                        >
                            <span className='sr-only'>View Product 1</span>
                        </Link>
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
                        <CartButton product={product as Product} />
                    </div>
                ))}
            </main>
        </section>
    );
}
