'use client';
import React from 'react';
import {
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
    Accordion,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useRouter, useSearchParams } from 'next/navigation';

const updateQueryParams = (
    router: any,
    searchParams: URLSearchParams,
    updates: Record<string, string | undefined>
) => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
    }

    const query = params.toString() ? `?${params.toString()}` : '';
    router.push(`/product${query}`);
};

const FilterProduct = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    console.log('Router', router);
    console.log('SearchParams', searchParams);

    const handleCategoryChange = (category: string) => {
        updateQueryParams(router, searchParams, { category });
    };

    const handlePriceChange = (priceRange: string) => {
        updateQueryParams(router, searchParams, { priceRange });
    };

    return (
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
                                <Checkbox
                                    id='category-1'
                                    value='Shoes'
                                    onChange={() =>
                                        handleCategoryChange('Shoes')
                                    }
                                />
                                Shoes
                            </Label>
                            <Label className='flex items-center gap-2 font-normal'>
                                <Checkbox
                                    id='category-2'
                                    value='Hoodies'
                                    onChange={() =>
                                        handleCategoryChange('Hoodies')
                                    }
                                />
                                Hoodies
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
                                <Checkbox
                                    id='price-1'
                                    onChange={() => handlePriceChange('$0-$50')}
                                />
                                $0 - $50
                            </Label>
                            <Label className='flex items-center gap-2 font-normal'>
                                <Checkbox
                                    id='price-2'
                                    onChange={() =>
                                        handlePriceChange('$51-$100')
                                    }
                                />
                                $51 - $100
                            </Label>
                            <Label className='flex items-center gap-2 font-normal'>
                                <Checkbox
                                    id='price-3'
                                    onChange={() =>
                                        handlePriceChange('$101-$150')
                                    }
                                />
                                $101 - $150
                            </Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    );
};

export default FilterProduct;
