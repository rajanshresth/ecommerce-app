'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BiUserCircle } from 'react-icons/bi';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function NavBar() {
    return (
        <div className='flex h-16 items-center justify-between space-x-8 bg-white p-4 '>
            <div className='flex w-3/4 items-center gap-8'>
                <Link href='/' className='gap- flex'>
                    <svg
                        className=' h-6 w-6 text-gray-800 dark:text-gray-200'
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
                        <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' />
                        <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
                        <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' />
                        <path d='M2 7h20' />
                        <path d='M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7' />
                    </svg>
                    <div>
                        <span className='text-xl font-bold text-gray-800 dark:text-gray-200'>
                            OneStore.
                        </span>
                    </div>
                    <span className='sr-only'>Fashion Store</span>
                </Link>
                <form className='relative w-full'>
                    <svg
                        className=' absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500'
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
                    />
                </form>
            </div>
            <div className='flex items-center justify-end gap-4 pr-4'>
                <AuthStatus />
                <Button size='icon' variant='ghost' asChild>
                    <Link href={'/cart'}>
                        <svg
                            className=' h-6 w-6 text-gray-800 dark:text-gray-200'
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
                            <circle cx='8' cy='21' r='1' />
                            <circle cx='19' cy='21' r='1' />
                            <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
                        </svg>
                        <span className='sr-only'>Shopping Cart</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export const AuthStatus = () => {
    const { status, data: session } = useSession();
    if (status === 'unauthenticated')
        return (
            <Link href='/api/auth/signin'>
                <BiUserCircle size={30} />
            </Link>
        );
    return (
        <div className='pr-6'>
            {status === 'authenticated' && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage
                                src={session.user.image}
                                className='h-9 w-9 rounded-full'
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <p>{session.user.email}</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/dashboard'>Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/api/auth/signout'>Signout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
};
