import { InvoiceTable } from '@/components/InvoiceTable';
import Filter from '@/components/filter';
import Invoice from '@/components/invoice';
import { Button } from '@/components/ui/button';
import { authOptions } from '@/lib/auth/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);
    if (session?.user.userRole === 'Admin') {
        return (
            <div className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
                <Invoice />
                <Button className='flex w-1/4 items-center'>
                    <Link href='/product/add-product'>Add Product</Link>
                </Button>
                <Filter />
                <InvoiceTable />
            </div>
        );
    }
}
