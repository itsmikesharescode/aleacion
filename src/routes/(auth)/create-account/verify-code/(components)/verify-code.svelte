<script lang="ts">
	import * as Form from '$lib/components/internals/form';
	import { Input } from '$lib/components/internals/input';
	import { verifyCodeSchema, type VerifyCodeSchema } from './schema';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import IconArrowNarrowLeft from '@tabler/icons-svelte/icons/arrow-narrow-left';
	import Button from '$lib/components/internals/button/button.svelte';
	import * as InputOTP from '$lib/components/internals/input-otp/index';
	import { page } from '$app/state';
	import { REGEXP_ONLY_DIGITS } from 'bits-ui';

	interface Props {
		verifyCodeForm: SuperValidated<VerifyCodeSchema>;
	}

	let { verifyCodeForm }: Props = $props();

	const form = superForm(verifyCodeForm, {
		validators: zodClient(verifyCodeSchema),
		id: crypto.randomUUID(),
		onUpdate: async ({ result }) => {
			const { status, data } = result;
			switch (status) {
				case 200:
					//navigate to auth page
					break;
				case 401:
					break;
			}
		}
	});

	const { form: formData, enhance, submitting, delayed, timeout } = form;

	const pageState = $derived(page.state) as { email: string; name: string } | null;
</script>

<div
	{@attach (el) => {
		if (!el) return;
		$formData.name = pageState?.name ?? '';
		$formData.email = pageState?.email ?? '';
	}}
	class="@container flex h-full w-full flex-col gap-4 sm:my-auto sm:h-fit sm:max-w-xs"
>
	<Button href="/create-account" variant="ghost" size="icon">
		<IconArrowNarrowLeft />
	</Button>

	<div class="">
		<h1 class="font-sans text-2xl tracking-wider">Verify your email</h1>
		<span class="text-muted-foreground text-sm">
			Hello {pageState?.name}, we've sent a verification code to your email. {pageState?.email}
		</span>
	</div>

	<form method="POST" use:enhance action="?/verifyCodeEvent" class="flex h-full flex-col gap-2">
		<Form.Field {form} name="code" class="flex flex-col items-center justify-center ">
			<Form.Control>
				{#snippet children({ props })}
					<InputOTP.Root
						maxlength={6}
						{...props}
						bind:value={$formData.code}
						pattern={REGEXP_ONLY_DIGITS}
					>
						{#snippet children({ cells })}
							<InputOTP.Group>
								{#each cells as cell (cell)}
									<InputOTP.Slot {cell} class="border-primary @min-[330px]:w-14" />
								{/each}
							</InputOTP.Group>
						{/snippet}
					</InputOTP.Root>
				{/snippet}
			</Form.Control>
			<Form.Description>This is your verification code.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="mt-auto md:mt-5">Confirm</Form.Button>
	</form>
</div>
