import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { verifyCodeSchema } from './(components)/schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		verifyCodeForm: await superValidate(zod(verifyCodeSchema))
	};
};

export const actions: Actions = {
	verifyCodeEvent: async ({ request }) => {
		const form = await superValidate(request, zod(verifyCodeSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	}
};
