import { z } from 'zod';

export const SellerSchema = z.object({
    name: z.string().min(3, 'Title is required').max(40),
    registration_number: z.string(),
    address: z.string(),
    phone_number: z.string(),
    description: z
        .string()
        .min(10, 'Description of at least 10 words is required')
        .max(6555),
    userEmail: z.string(),
});
