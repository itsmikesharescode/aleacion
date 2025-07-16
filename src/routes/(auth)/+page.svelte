<script lang="ts">
	import { Separator } from '$lib/components/internals/separator/index';
	import Button from '$lib/components/internals/button/button.svelte';
	import IconGoogle from '$lib/assets/svgs/google.svg';
	import IconGithub from '$lib/assets/svgs/github.svg';
</script>

<div class="flex h-screen flex-col items-center justify-center gap-6 p-4 sm:p-10 md:p-0">
	<div class="flex w-full max-w-xs flex-col gap-6">
		<h1 class="font-sans text-4xl tracking-wider">Svelte/Kit Philippines</h1>
		<div class="flex flex-col gap-1">
			<span class="text-muted-foreground text-base">Join the community</span>
		</div>

		<div class="flex w-full flex-col gap-2">
			<Button variant="secondary" class="w-full border">
				<img src={IconGoogle} alt="Google" class="size-4" />
				Sign in with Google
			</Button>

			<Button variant="secondary" class="w-full border">
				<img src={IconGithub} alt="Github" class="size-4" />
				Sign in with Github
			</Button>
		</div>

		<div class="relative flex w-full items-center">
			<Separator />
			<span class="bg-background absolute left-1/2 -translate-x-1/2">OR</span>
		</div>

		<Button href="/create-account" class="w-full">Create Account</Button>
	</div>
</div>
