<script lang="ts">
	import { ScrollArea } from '$lib/components/internals/scroll-area/index.js';
	import ContentNav from './(components)/(content-nav)/content-nav.svelte';
	import * as Tabs from '$lib/components/internals/tabs/index';
</script>

<aside class="h-[100dvh] border-r">
	<ContentNav />
	<ScrollArea class="h-[calc(100dvh-52px] px-2">
		<section class="h-[calc(100dvh-52px)]">
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
