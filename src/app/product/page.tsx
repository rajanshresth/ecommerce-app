import {
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
    Accordion,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Product from './_component/product';

export default async function Component() {
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
            <Product />
        </section>
    );
}
