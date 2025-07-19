<script lang="ts">
	import PostingCard from './(components)/(posting-card)/posting-card.svelte';
	import ScrollArea from '$lib/components/internals/scroll-area/scroll-area.svelte';
	import CreatePost from './(components)/(create-post)/create-post.svelte';
</script>

<ScrollArea class="h-[calc(100dvh-52px)] pt-2 pr-4">
	<CreatePost />

	<div class="flex flex-col gap-4">
		<!-- Custom handlers example -->
		{#each Array(20)}
			<PostingCard />
		{/each}
	</div>
</ScrollArea>
