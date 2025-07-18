<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/internals/button/button.svelte';
	import { urlParamStacker, urlParamReducer } from '$lib/utils';

	const activeParam = $derived(page.url.searchParams.get('tab'));

	/* const whatUrl = $derived.by(() => {
		const baseUrl = page.url.pathname;
		if (activeParam) return `${baseUrl}${urlParamReducer('tab', page)}`;
	}); */

	const tabs = [
		{
			href: '/home',
			label: 'For you'
		},
		{
			href: '/home?tab=following',
			label: 'Following'
		}
	];
</script>

<nav class="sticky top-0 grid grid-cols-2 items-center border-b bg-white">
	{#each tabs as tab, i}
		<Button
			variant="ghost"
			href={tab.href}
			class={[
				'bg-secondary hover:bg-sidebar-border rounded-none border-none text-center transition-all',
				page.url.href === `${page.url.origin}${tab.href}`
					? 'font-bold underline'
					: 'text-muted-foreground font-normal'
			]}
		>
			{tab.label}
		</Button>
	{/each}
</nav>
