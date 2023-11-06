import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AuthProvider from '@/lib/auth/Provider'
import NavBar from '@/components/NavBar';

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
                <AuthProvider>
                    <main className='flex flex-col space-y-4 p-4'>
                        <NavBar />
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
