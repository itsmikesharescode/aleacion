import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { createAccSchema } from './(components)/schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		createAccForm: await superValidate(zod(createAccSchema))
	};
};

export const actions: Actions = {
	createAccEvent: async ({ request }) => {
		const form = await superValidate(request, zod(createAccSchema));

		if (!form.valid) {
			return fail(401, { form });
		}

		return { form };
	}
};
