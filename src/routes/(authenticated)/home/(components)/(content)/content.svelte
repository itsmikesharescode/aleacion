<script lang="ts">
	import PostingCard from './(components)/(posting-card)/posting-card.svelte';
	import ScrollArea from '$lib/components/internals/scroll-area/scroll-area.svelte';
</script>

<ScrollArea class="h-[calc(100dvh-52px)] pt-2 pr-4">
	<div class="flex flex-col gap-4">
		<!-- Custom handlers example -->
		{#each Array(20)}
			<PostingCard />
		{/each}

		<!-- Internal routing example
	<Card.Root>
		<Card.Header class="grid grid-cols-[auto_1fr] gap-2">
			<div class="bg-primary size-10 rounded-full"></div>
			<div class="">
				<div class="flex items-center gap-1">
					<Card.Title>DevTwitter</Card.Title>
					<Card.Description>@devtwitter</Card.Description>
				</div>
				<Card.Description>2H ago</Card.Description>
			</div>
		</Card.Header>
		<Card.Content class="min-w-0 overflow-hidden">
			<TweetText
				text="Thread 🧵 on the amazing features in @sveltejs 5.0! 

1/ Runes are revolutionary ⚡
2/ Performance is incredible 🚀  
3/ DX is unmatched ✨

Read more: https://svelte.dev/blog/svelte-5-is-alive

#svelte5 #javascript #frontend #webdev
Thanks @rich_harris @dummdidumm_ for this masterpiece! 

$SVLT to the moon! 🌙"
				class="break-words whitespace-pre-line"
				useInternalRouting={true}
			/>
		</Card.Content>
		<Card.Footer class="flex items-center justify-between pt-3">
			<div class="flex items-center gap-4">
				<button class="text-gray-500 transition-colors hover:text-blue-500">
					<span class="sr-only">Reply</span>
					💬 12
				</button>
				<button class="text-gray-500 transition-colors hover:text-green-500">
					<span class="sr-only">Retweet</span>
					🔄 34
				</button>
				<button class="text-gray-500 transition-colors hover:text-red-500">
					<span class="sr-only">Like</span>
					❤️ 156
				</button>
			</div>
			<p class="text-muted-foreground text-xs">Uses internal routing (try clicking #hashtags)</p>
		</Card.Footer>
	</Card.Root>

	 External links example
	<Card.Root>
		<Card.Header class="grid grid-cols-[auto_1fr] gap-2">
			<div class="size-10 rounded-full bg-green-500"></div>
			<div class="">
				<div class="flex items-center gap-1">
					<Card.Title>TechNews</Card.Title>
					<Card.Description>@technews</Card.Description>
				</div>
				<Card.Description>5m ago</Card.Description>
			</div>
		</Card.Header>
		<Card.Content class="min-w-0 overflow-hidden">
			<TweetText
				text="BREAKING: Major update to @typescript! 🎉

New features include:
• Better type inference
• Improved performance  
• Enhanced IDE support

Full details: https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/

Shoutout to @ahejlsberg and the entire @microsoft team!

#TypeScript #JavaScript #WebDev #Programming

Stock watch: $MSFT looking strong 📈"
				class="break-words whitespace-pre-line"
				useInternalRouting={false}
			/>
		</Card.Content>
		<Card.Footer class="flex items-center justify-between pt-3">
			<div class="flex items-center gap-4">
				<button class="text-gray-500 transition-colors hover:text-blue-500">
					<span class="sr-only">Reply</span>
					💬 45
				</button>
				<button class="text-gray-500 transition-colors hover:text-green-500">
					<span class="sr-only">Retweet</span>
					🔄 128
				</button>
				<button class="text-gray-500 transition-colors hover:text-red-500">
					<span class="sr-only">Like</span>
					❤️ 892
				</button>
			</div>
			<p class="text-muted-foreground text-xs">Uses external Twitter links (opens new tabs)</p>
		</Card.Footer>
	</Card.Root>

	Mixed example with custom hashtag handler 
		<Card.Header class="grid grid-cols-[auto_1fr] gap-2">
			<div class="size-10 rounded-full bg-purple-500"></div>
			<div class="">
				<div class="flex items-center gap-1">
					<Card.Title>CodeMaster</Card.Title>
					<Card.Description>@codemaster</Card.Description>
				</div>
				<Card.Description>1H ago</Card.Description>
			</div>
		</Card.Header>
		<Card.Content class="min-w-0 overflow-hidden">
			<TweetText
				text="Just discovered this amazing pattern in #svelte5 for reactive state management! 🤯

The new runes system with @sveltejs is incredible. Special shoutout to @rich_harris for the vision.

Tutorial coming soon: https://example.com/svelte5-tutorial

#webdev #javascript #reactive $TECH"
				class="break-words whitespace-pre-line"
				useInternalRouting={true}
				onHashtagClick={(hashtag) => {
					alert(`Custom hashtag handler: Navigate to trending page for #${hashtag}`);
				}}
				onCashtagClick={(cashtag) => {
					alert(`Custom cashtag handler: Show portfolio tracker for $${cashtag}`);
				}}
			/>
		</Card.Content>
		<Card.Footer class="flex items-center justify-between pt-3">
			<div class="flex items-center gap-4">
				<button class="text-gray-500 transition-colors hover:text-blue-500">
					<span class="sr-only">Reply</span>
					💬 23
				</button>
				<button class="text-gray-500 transition-colors hover:text-green-500">
					<span class="sr-only">Retweet</span>
					🔄 67
				</button>
				<button class="text-gray-500 transition-colors hover:text-red-500">
					<span class="sr-only">Like</span>
					❤️ 234
				</button>
			</div>
			<p class="text-muted-foreground text-xs">
				Mixed: Custom #hashtag and $cashtag handlers, internal @mentions
			</p>
		</Card.Footer>
	</Card.Root> -->
	</div>
</ScrollArea>
