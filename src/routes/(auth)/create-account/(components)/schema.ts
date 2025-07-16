import { z } from 'zod';

export const createAccSchema = z.object({
	email: z.string().email('Invalid email address'),
	name: z.string().min(1, 'Nickname is required'),
	birthday: z.string().min(1, 'Birthday is required')
});

export type CreateAccSchema = z.infer<typeof createAccSchema>;
