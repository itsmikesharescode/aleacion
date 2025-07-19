<script lang="ts">
	import { parseTweetText, type TweetEntity } from '$lib/utils.js';
	import { cn } from '$lib/utils.js';
	import { goto } from '$app/navigation';

	let {
		text,
		class: className = '',
		allowLinks = true,
		useInternalRouting = true,
		onHashtagClick,
		onMentionClick,
		onUrlClick,
		onCashtagClick,
		...restProps
	}: {
		text: string;
		class?: string;
		allowLinks?: boolean;
		useInternalRouting?: boolean;
		onHashtagClick?: (hashtag: string) => void;
		onMentionClick?: (username: string) => void;
		onUrlClick?: (url: string) => void;
		onCashtagClick?: (cashtag: string) => void;
		[key: string]: any;
	} = $props();

	// Parse the tweet text into entities
	let entities = $derived(parseTweetText(text));

	function getEntityClasses(entity: TweetEntity): string {
		switch (entity.type) {
			case 'hashtag':
				return 'text-blue-500 hover:text-blue-600 font-medium';
			case 'mention':
				return 'text-blue-500 hover:text-blue-600 font-medium';
			case 'url':
				return 'text-blue-500 hover:text-blue-600 underline underline-offset-2';
			case 'cashtag':
				return 'text-green-500 hover:text-green-600 font-medium';
			default:
				return '';
		}
	}

	function handleEntityClick(entity: TweetEntity) {
		if (!allowLinks) return;

		switch (entity.type) {
			case 'hashtag':
				if (onHashtagClick) {
					// Remove the # from the hashtag
					const hashtag = entity.text.replace('#', '');
					onHashtagClick(hashtag);
				} else if (useInternalRouting) {
					// Navigate to internal hashtag page
					const hashtag = entity.text.replace('#', '');
					goto(`/hashtag/${encodeURIComponent(hashtag)}`);
				} else {
					// External Twitter link
					window.open(
						`https://twitter.com/hashtag/${entity.text.replace('#', '')}`,
						'_blank',
						'noopener,noreferrer'
					);
				}
				break;

			case 'mention':
				if (onMentionClick) {
					// Remove the @ from the mention
					const username = entity.text.replace('@', '');
					onMentionClick(username);
				} else if (useInternalRouting) {
					// Navigate to internal user profile page
					const username = entity.text.replace('@', '');
					goto(`/user/${encodeURIComponent(username)}`);
				} else {
					// External Twitter link
					window.open(
						`https://twitter.com/${entity.text.replace('@', '')}`,
						'_blank',
						'noopener,noreferrer'
					);
				}
				break;

			case 'url':
				if (onUrlClick) {
					onUrlClick(entity.text);
				} else if (useInternalRouting) {
					// For URLs, you might want to handle them differently
					// This could navigate to an internal link preview page
					goto(`/link?url=${encodeURIComponent(entity.text)}`);
				} else {
					// External link
					window.open(entity.text, '_blank', 'noopener,noreferrer');
				}
				break;

			case 'cashtag':
				if (onCashtagClick) {
					// Remove the $ from the cashtag
					const cashtag = entity.text.replace('$', '');
					onCashtagClick(cashtag);
				} else if (useInternalRouting) {
					// Navigate to internal cashtag/stock page
					const cashtag = entity.text.replace('$', '');
					goto(`/stock/${encodeURIComponent(cashtag)}`);
				} else {
					// External Twitter link
					window.open(
						`https://twitter.com/search?q=%24${entity.text.replace('$', '')}`,
						'_blank',
						'noopener,noreferrer'
					);
				}
				break;
		}
	}
</script>

<div class={cn('text-sm leading-relaxed', className)} {...restProps}>
	{#each entities as entity}
		{#if entity.type === 'text'}
			<span>{entity.text}</span>
		{:else if allowLinks}
			<button
				type="button"
				class={cn(
					'inline cursor-pointer transition-colors duration-200 hover:underline',
					getEntityClasses(entity)
				)}
				onclick={() => handleEntityClick(entity)}
			>
				{entity.text}
			</button>
		{:else}
			<span class={cn('inline', getEntityClasses(entity))}>
				{entity.text}
			</span>
		{/if}
	{/each}
</div>
