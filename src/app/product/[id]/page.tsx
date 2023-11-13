import {
    SelectValue,
    SelectTrigger,
    SelectLabel,
    SelectItem,
    SelectGroup,
    SelectContent,
    Select,
} from '@/components/ui/select';
import Image from 'next/image';
import prisma from '@/server/db/client';
import CartButton from '@/app/cart/_component/add-to-cart';

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
    const dbProduct = await prisma.product.findUnique({
        where: { id: params.id },
    });
    return (
        <div className='mx-auto flex max-w-6xl flex-col px-4 py-6 md:flex-row'>
            <div className='mb-6 w-full pr-4 md:mb-0 md:w-1/2'>
                <div className='grid grid-cols-1 items-center gap-6'>
                    <Image
                        alt='Product'
                        className='h-full w-full rounded-md object-cover'
                        height='320'
                        src={`${dbProduct?.image}`}
                        style={{
                            aspectRatio: '320/320',
                            objectFit: 'cover',
                        }}
                        width='320'
                    />
                </div>
            </div>
            <div className='w-full pl-4 md:w-1/2'>
                <div className='mb-6'>
                    <h1 className='text-3xl font-bold'>{dbProduct?.name}</h1>
                </div>
                <div className='mb-6'>
                    <div className='text-4xl font-bold'>
                        ${dbProduct?.price}
                    </div>
                </div>
                <div className='mb-6 grid grid-cols-1 items-center gap-6 md:grid-cols-2'>
                    <div className='text-lg font-semibold'>
                        Stock: {dbProduct?.quantity} left
                    </div>
                </div>
                <div className='mt-4'>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder='Select a Size' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sizes</SelectLabel>
                                <SelectItem value='small'>Small</SelectItem>
                                <SelectItem value='medium'>Medium</SelectItem>
                                <SelectItem value='large'>Large</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-4'>
                    <p className='text-sm'>{dbProduct?.description}</p>
                </div>
                <div className='mt-4'>
                    <CartButton
                        product={{
                            productId: dbProduct?.id || '',
                            quantity: 1,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
