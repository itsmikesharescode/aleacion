import { z } from 'zod';

export const verifyCodeSchema = z.object({
	code: z.string().min(1, 'Code is required'),
	email: z.string().email('Invalid email address'),
	name: z.string().min(1, 'Nickname is required')
});

export type VerifyCodeSchema = z.infer<typeof verifyCodeSchema>;
