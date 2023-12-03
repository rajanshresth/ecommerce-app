'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const router = useRouter();
    const onSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/search?q=${encodedSearchQuery}`);
    };

    return (
        <form className='relative w-full' onSubmit={onSearch}>
            <svg
                className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500'
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
                className='rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Search fashion items...'
                type='search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchInput;
