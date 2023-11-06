'use client';

import * as React from 'react';
import Link from 'next/link';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';

export function MenuItems() {
    return (
        <NavigationMenu className='px-4'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='/products' legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Products
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                            <li className='row-span-3'>
                                <NavigationMenuLink>
                                    <Link
                                        className='bg-sport flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md no-underline outline-none focus:shadow-md'
                                        href='/'
                                    >
                                        <div className='relative top-0 h-full w-full border border-border bg-secondary p-6 pt-24'>
                                            <div className='mb-2 mt-4 text-lg font-medium text-primary'>
                                                Here to help
                                            </div>
                                            <p className='text-sm leading-tight text-gray-100 text-muted-foreground'>
                                                Contact our customer support
                                                team 24/7
                                            </p>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <MenuLinks />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button>
                        <Link href='/seller' passHref>
                            <NavigationMenuLink>For Seller</NavigationMenuLink>
                        </Link>
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

// const ListItem = React.forwardRef<
//     React.ElementRef<'a'>,
//     React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//     return (
//         <li>
//             <NavigationMenuLink asChild>
//                 <a
//                     ref={ref}
//                     className={cn(
//                         'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//                         className
//                     )}
//                     {...props}
//                 >
//                     <div className='text-sm font-medium leading-none'>
//                         {title}
//                     </div>
//                     <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
//                         {children}
//                     </p>
//                 </a>
//             </NavigationMenuLink>
//         </li>
//     );
// });
// ListItem.displayName = 'ListItem';

const MenuLinks = () => {
    const links = [
        {
            label: 'Shoes',
            href: '/shoes',
            description:
                'Shoes for Every Style and Occasion - Shop Now and Save',
        },
        {
            label: 'Shirt',
            href: '/shirt',
            description: "Get Your Shirts Before They're Gone",
        },
        {
            label: 'Winter sale',
            href: '/wintersale',
            description: 'Grab a bargain with our winter sale.',
        },
    ];
    return (
        <li className='flex flex-col justify-between gap-6 '>
            {links.map(({ label, href, description }) => {
                return (
                    <Link
                        key={href}
                        href={href}
                        passHref
                        className='gap-4 hover:rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                    >
                        <div className='text-sm font-medium leading-none'>
                            {label}
                        </div>
                        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                            {description}
                        </p>
                    </Link>
                );
            })}
        </li>
    );
};
