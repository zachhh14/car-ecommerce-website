import { z } from 'zod'

export const CarSchema = z.object({
    year: z.string().min(2).max(50),
    make: z.string().min(2).max(50),
    model: z.string().min(2).max(50),
    mileage: z.string().min(2).max(50),
    price: z.string().min(2).max(50),
    description: z.string().min(2),
})
