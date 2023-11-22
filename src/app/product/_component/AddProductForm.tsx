'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { ProductSchema } from '@/lib/validation/Product_schema';
import ImageUpload from './upload/uploadimage';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
type AddProductType = z.infer<typeof ProductSchema>;

const AddProductForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const form = useForm<AddProductType>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            quantity: 0,
        },
    });

    const onSubmit = async (data: AddProductType) => {
        try {
            setIsSubmitting(true);
            await axios.post('/api/product', data);
            router.push('/dashboard');
            router.refresh();
        } catch (error) {
            setIsSubmitting(false);
            setError('An error occured while adding product');
        }
    };
    const image = form.watch('image');

    return (
        <div className='mx-auto w-full max-w-screen-sm'>
            {error && <p className='text-red-500'>{error}</p>}
            <h1 className='mb-6 text-center text-3xl font-bold'>
                Product Information
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Product Name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type='number'
                                        placeholder='Price'
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
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id='productDescription'
                                        rows={3}
                                        {...field}
                                        placeholder='Product Description'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <ImageUpload
                            onChange={(value) => form.setValue('image', value)}
                            value={image}
                        />
                    </div>
                    <div className='mb-2'>
                        <FormField
                            control={form.control}
                            name='size'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Size</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select a product size' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='S'>S</SelectItem>
                                            <SelectItem value='M'>M</SelectItem>
                                            <SelectItem value='L'>L</SelectItem>
                                            <SelectItem value='XL'>
                                                XL
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='category'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select a product category' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='TShirt'>
                                                TShirt
                                            </SelectItem>
                                            <SelectItem value='Hoodie'>
                                                Hoodies
                                            </SelectItem>
                                            <SelectItem value='Sweetshirt'>
                                                Sweetshirt
                                            </SelectItem>
                                            <SelectItem value='Pants'>
                                                Pants
                                            </SelectItem>
                                            <SelectItem value='Shorts'>
                                                Shorts
                                            </SelectItem>
                                            <SelectItem value='Hat'>
                                                Hat
                                            </SelectItem>
                                            <SelectItem value='Shoes'>
                                                Shoes
                                            </SelectItem>
                                            <SelectItem value='Socks'>
                                                Socks
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Stock quantity  */}
                    <FormField
                        control={form.control}
                        name='quantity'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        type='number'
                                        placeholder='Quantity'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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

export default AddProductForm;
