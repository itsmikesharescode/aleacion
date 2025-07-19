<script lang="ts">
	import { ScrollArea } from '$lib/components/internals/scroll-area/index.js';
	import PostingCard from './(components)/(posting-card)/posting-card.svelte';
</script>

<ScrollArea class="h-[calc(100dvh-76px]  pr-2">
	<section class="mt-4.5 h-[calc(100dvh-76px)]">
		<div class="flex flex-col gap-4">
			{#each Array(60), i}
				<PostingCard />
			{/each}
		</div>
	</section>
</ScrollArea>
