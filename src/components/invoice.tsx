import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Invoice = () => {
    return (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Total Revenue
                    </CardTitle>
                    <svg
                        className=' h-4 w-4 text-zinc-500 dark:text-zinc-400'
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
                        <line x1='12' x2='12' y1='2' y2='22' />
                        <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>$4,5231.6</div>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                        +4.61% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Orders
                    </CardTitle>
                    <svg
                        className=' h-4 w-4 text-zinc-500 dark:text-zinc-400'
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
                        <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
                        <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
                        <path d='M12 3v6' />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>+2350</div>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                        +8.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Products
                    </CardTitle>
                    <svg
                        className=' h-4 w-4 text-zinc-500 dark:text-zinc-400'
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
                        <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
                        <path d='m3.3 7 8.7 5 8.7-5' />
                        <path d='M12 22V12' />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>+1,223</div>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                        +3% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Active Users
                    </CardTitle>
                    <svg
                        className=' h-4 w-4 text-zinc-500 dark:text-zinc-400'
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
                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                        <circle cx='9' cy='7' r='4' />
                        <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>+93</div>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                        +17 since last hour
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Invoice;
