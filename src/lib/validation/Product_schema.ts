import { z } from 'zod';

export const ProductSchema = z.object({
    name: z.string().min(3, 'Title is required').max(40),
    description: z
        .string()
        .min(10, 'Description of at least 10 words is required')
        .max(6555),
    price: z.coerce.number({
        required_error: 'Price is required',
    }),
    image: z.string(),
    size: z.string().min(1, 'size is required').max(10),
    quantity: z.coerce.number({
        required_error: 'Stock quantity is required',
    }),
    category: z.string().min(3, 'Category is required').max(50),
});
