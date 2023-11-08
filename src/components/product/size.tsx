import React from 'react';
import { Controller, useForm, FieldValues, Control } from 'react-hook-form';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectContent,
} from '../ui/select';

interface ProductSizeProps {
    control: Control<FieldValues>;
}

const ProductSize: React.FC<ProductSizeProps> = ({ control }) => {
    return (
        <Controller
            name='size' // Specify the name that corresponds to the form field name
            control={control}
            render={({ field }) => (
                <Select>
                    <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Size' {...field} />{' '}
                        {/* Bind the value, onChange, and name */}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Size</SelectLabel>
                            <SelectItem value='XL'>XL</SelectItem>
                            <SelectItem value='L'>L</SelectItem>
                            <SelectItem value='M'>M</SelectItem>
                            <SelectItem value='S'>S</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            )}
        />
    );
};

export default ProductSize;
