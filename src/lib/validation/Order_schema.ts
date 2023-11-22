import { z } from 'zod';

export const OrderSchema = z.object({
    productId: z.string(),
    quantity: z.coerce.number({
        required_error: 'Quantity is required',
    }),
    price: z.coerce.number({
        required_error: 'Price is required',
    }),
});
