import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card } from './ui/card';

export function InvoiceTable() {
    return (
        <div>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>
                                Order ID
                            </TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className='text-right'>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='font-medium'>
                                ORD001
                            </TableCell>
                            <TableCell>Running Shoes</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className='text-right'>
                                $250.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                ORD002
                            </TableCell>
                            <TableCell>Sports Watch</TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell className='text-right'>
                                $150.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                ORD003
                            </TableCell>
                            <TableCell>Yoga Mat</TableCell>
                            <TableCell>Emma Brown</TableCell>
                            <TableCell>Unpaid</TableCell>
                            <TableCell className='text-right'>
                                $350.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                ORD004
                            </TableCell>
                            <TableCell>Fitness Band</TableCell>
                            <TableCell>Oliver Wilson</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className='text-right'>
                                $450.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                ORD005
                            </TableCell>
                            <TableCell>Gym Gloves</TableCell>
                            <TableCell>Sophia Taylor</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className='text-right'>
                                $550.00
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
