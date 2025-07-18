<script lang="ts">
	import { ScrollArea } from '$lib/components/internals/scroll-area/index.js';
	import ContentNav from './(components)/(content-nav)/content-nav.svelte';
</script>

<aside class="h-[100dvh]">
	<ContentNav />
	<ScrollArea class="h-[calc(100dvh-76px]  pr-2">
		<section class="mt-4.5 h-[calc(100dvh-76px)]">
			<div class="flex flex-col gap-4">
				{#each Array(60), i}
					<div
						class="bg-secondary flex h-[250px] w-full items-center justify-center rounded-lg text-2xl font-bold"
					>
						{i}
					</div>
				{/each}
			</div>
		</section>
	</ScrollArea>
</aside>
