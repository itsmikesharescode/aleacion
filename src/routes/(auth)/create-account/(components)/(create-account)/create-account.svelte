<script lang="ts">
	import * as Form from '$lib/components/internals/form';
	import { Input } from '$lib/components/internals/input';
	import { createAccSchema, type CreateAccSchema } from '../schema';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import IconArrowNarrowLeft from '@tabler/icons-svelte/icons/arrow-narrow-left';
	import Button from '$lib/components/internals/button/button.svelte';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
	import BirthdayPicker from '$lib/components/externals/pickers/birthday/birthday.svelte';

	interface Props {
		createAccForm: SuperValidated<CreateAccSchema>;
	}

	let { createAccForm }: Props = $props();

	const form = superForm(createAccForm, {
		validators: zodClient(createAccSchema),
		id: crypto.randomUUID(),
		SPA: true,
		onUpdate: async ({ result }) => {
			const { status, data } = result;
			switch (status) {
				case 200:
					await goto('/create-account/verify-code', {
						state: { email: $formData.email, name: $formData.name }
					});
					break;
				case 401:
					toast.error(data.msg);
					break;
			}
		}
	});

	const { form: formData, enhance, submitting, delayed, timeout } = form;
</script>

<section class="flex h-full flex-col gap-6">
	<Button href="/" variant="ghost" size="icon">
		<IconArrowNarrowLeft />
	</Button>
	<h1 class="font-sans text-2xl tracking-wider">Create your account</h1>
	<form method="POST" action="?/createAccEvent" use:enhance class="flex h-full flex-col gap-2">
		<Form.Field {form} name="name">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Nickname</Form.Label>
					<Input {...props} bind:value={$formData.name} placeholder="John Doe" />
				{/snippet}
			</Form.Control>
			<Form.Description>This is your public display name.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<Input {...props} bind:value={$formData.email} placeholder="abc@gmail.com" />
				{/snippet}
			</Form.Control>
			<Form.Description>We'll use this email to send you a verification code.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="birthday">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Birthday</Form.Label>
					<BirthdayPicker bind:selected={$formData.birthday} />
					<input type="hidden" {...props} bind:value={$formData.birthday} />
				{/snippet}
			</Form.Control>
			<Form.Description>This is your birthday.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="mt-auto">Next</Form.Button>
	</form>
</section>
