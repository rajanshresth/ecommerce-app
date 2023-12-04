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
import { useRouter } from 'next/navigation';

const FilterProduct = () => {
    const router = useRouter();

    const handlePriceChange = (value: string) => {
        const uncodedValue = encodeURI(value);
        router.push(`/product?q=${uncodedValue}`);
    };
    const handleCategoryChange = (value: string) => {
        const uncodedValue = encodeURI(value);
        console.log(uncodedValue);
        router.push(`/product?q=${uncodedValue}`);
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
                                    onClick={() =>
                                        handleCategoryChange('Shoes')
                                    }
                                />
                                Shoes
                            </Label>
                            <Label className='flex items-center gap-2 font-normal'>
                                <Checkbox
                                    id='category-2'
                                    value='Hoodies'
                                    onClick={() =>
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
                                    onClick={() => handlePriceChange('$0-$50')}
                                />
                                $0 - $50
                            </Label>
                            <Label className='flex items-center gap-2 font-normal'>
                                <Checkbox
                                    id='price-2'
                                    onClick={() =>
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
