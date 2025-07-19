<script lang="ts">
	import * as Card from '$lib/components/internals/card/index';
	import { TweetText } from '$lib/components/internals/tweet-text/index';

	// Custom handlers for different entity types
	function handleHashtagClick(hashtag: string) {
		console.log('Hashtag clicked:', hashtag);
		// You could dispatch an event, update a store, or navigate
		// For now, we'll use the default internal routing
	}

	function handleMentionClick(username: string) {
		console.log('Mention clicked:', username);
	}

	function handleUrlClick(url: string) {
		console.log('URL clicked:', url);
		// Custom logic for URLs - maybe show a preview modal
		if (confirm(`Open external link: ${url}?`)) {
			window.open(url, '_blank', 'noopener,noreferrer');
		}
	}

	function handleCashtagClick(cashtag: string) {
		console.log(cashtag);
	}
</script>

<Card.Root>
	<Card.Header class="grid grid-cols-[auto_1fr] gap-2">
		<div class="bg-secondary size-10 rounded-full"></div>
		<div class="">
			<div class="flex items-center gap-1">
				<Card.Title>MikeyRue</Card.Title>
				<Card.Description>@mikeyrue</Card.Description>
			</div>
			<Card.Description>9H ago</Card.Description>
		</div>
	</Card.Header>
	<Card.Content class="min-w-0 overflow-hidden">
		<!-- Example with custom handlers -->
		<TweetText
			text="Just shipped an amazing new feature for @aleacion with #svelte5 and #tailwindcss! 🚀 The developer experience is incredible. Check it out at https://aleacion.dev and let me know what you think! Special thanks to @rich_harris for the inspiration. #webdev #typescript"
			class="break-words break-all whitespace-normal"
			useInternalRouting={false}
			onMentionClick={handleMentionClick}
			onUrlClick={handleUrlClick}
			onCashtagClick={handleCashtagClick}
			onHashtagClick={handleHashtagClick}
		/>
	</Card.Content>
	<Card.Footer>
		<p class="text-muted-foreground text-xs">
			This card uses custom click handlers (try clicking @mentions and URLs)
		</p>
	</Card.Footer>
</Card.Root>
