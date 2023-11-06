import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from './ui/input';

const Filter = () => {
    return (
        <div className='flex flex-col gap-4 md:flex-row md:items-end'>
            <form className='w-full md:w-1/2'>
                <div className='relative'>
                    <svg
                        className=' absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400'
                        fill='none'
                        height='24'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        width='24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle cx='11' cy='11' r='8' />
                        <path d='m21 21-4.3-4.3' />
                    </svg>
                    <Input
                        className='pl-8 sm:w-[300px] md:w-full'
                        placeholder='Search products...'
                        type='search'
                    />
                </div>
            </form>
            <div className='flex flex-col gap-4 md:w-1/2 md:flex-row'>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder='Filter by status' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value='paid'>Paid</SelectItem>
                            <SelectItem value='pending'>Pending</SelectItem>
                            <SelectItem value='unpaid'>Unpaid</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder='Filter by amount' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Amount</SelectLabel>
                            <SelectItem value='low'>Low to High</SelectItem>
                            <SelectItem value='high'>High to Low</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Filter;
