import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AuthProvider from '@/lib/auth/Provider'
import NavBar from '@/components/NavBar';
import { MenuItems } from '@/components/Menu-items';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ecommerce-app',
    description: 'One stop shop for all your needs',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <CartProvider>
                    <AuthProvider>
                        <main className='flex flex-col space-y-4 bg-white p-4 text-black'>
                            <div className='h-28 bg-white py-2 shadow-md'>
                                <NavBar />
                                <MenuItems />
                            </div>
                            {children}
                        </main>
                    </AuthProvider>
                </CartProvider>
            </body>
        </html>
    );
}
