'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SellerSchema } from '@/lib/validation/Seller_schema';
type SellerFormType = z.infer<typeof SellerSchema>;
import { useSession } from 'next-auth/react';

const SellerForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const { data: session } = useSession();

    const form = useForm<SellerFormType>({
        resolver: zodResolver(SellerSchema),
        defaultValues: {
            userEmail: session?.user.email,
        },
    });

    const onSubmit = async (data: SellerFormType) => {
        try {
            setIsSubmitting(true);

            await axios.post('/api/seller', data);
            router.push('/seller/message');
            router.refresh();
        } catch (error) {
            setIsSubmitting(false);
            setError('An error occurred while adding the product');
        }
    };
    return (
        <div className='mx-auto w-full max-w-screen-sm'>
            {error && <p className='text-red-500'>{error}</p>}

            <Form {...form}>
                <h1 className='mb-4 text-2xl font-semibold'>Add Seller</h1>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Business Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Business Name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='registration_number'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Business Registration.No</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Business Registration.No'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Business description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder='Business Description'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex w-full justify-between'>
                        <span className='w-[40%]'>
                            <FormField
                                control={form.control}
                                name='phone_number'
                                render={({ field }) => (
                                    <FormControl>
                                        <FormItem>
                                            <FormLabel>Phone number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='number'
                                                    placeholder='Phone number'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </FormControl>
                                )}
                            />
                        </span>
                        <span className='w-[50%]'>
                            <FormField
                                control={form.control}
                                name='address'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Business Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Business Address'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </span>
                    </div>
                    <Button
                        type='submit'
                        className='mt-2'
                        disabled={isSubmitting}
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SellerForm;
