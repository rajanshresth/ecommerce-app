import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectContent,
} from '../ui/select';

const ProductCategory = () => {
    const {
        control,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <Controller
                name='category'
                control={control}
                defaultValue=''
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                    <Select>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Category' {...field} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                <SelectItem value='TShirt'>TShirt</SelectItem>
                                <SelectItem value='Hoodie'>Hoodie</SelectItem>
                                <SelectItem value='Sweatshirt'>
                                    Sweatshirt
                                </SelectItem>
                                <SelectItem value='Pants'>Pants</SelectItem>
                                <SelectItem value='Shorts'>Shorts</SelectItem>
                                <SelectItem value='Hat'>Hat</SelectItem>
                                <SelectItem value='Shoes'>Shoes</SelectItem>
                                <SelectItem value='Socks'>Socks</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />
            <div>
                {errors.category && (
                    <span className='text-red-500'>{errors.root?.message}</span>
                )}
            </div>
        </div>
    );
};

export default ProductCategory;
