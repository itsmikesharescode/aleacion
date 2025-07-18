<script lang="ts">
	import { page } from '$app/state';
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

<nav class="sticky top-0 grid grid-cols-2 items-center border-b bg-green-500">
	{#each tabs as tab}
		<a
			href={tab.href}
			class={[
				'bg-secondary border-x-1 p-2 text-center',
				page.url.href === `${page.url.origin}${tab.href}` ? 'font-bold' : 'font-normal'
			]}
		>
			{tab.label}
		</a>
	{/each}
</nav>
