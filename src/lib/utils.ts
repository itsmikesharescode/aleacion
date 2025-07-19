import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import twitterText from 'twitter-text';
import type { Page } from '@sveltejs/kit';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const urlParamStacker = (
	param: string,
	value: string,
	page: Page<Record<string, string>, string | null>
) => {
	const url = new URL(page.url);
	url.searchParams.set(param, value);
	return url.toString();
};

export const urlParamReducer = (
	param: string,
	page: Page<Record<string, string>, string | null>
) => {
	const searchParams = new URLSearchParams(page.url.searchParams);
	searchParams.delete(param);
	return searchParams;
};

//await goto(`${page.url.pathname}?${urlParamReducer('paramName', page)}`);

// Twitter text processing utilities
export interface TweetEntity {
	type: 'text' | 'hashtag' | 'mention' | 'url' | 'cashtag';
	text: string;
	url?: string;
	indices: [number, number];
}

export function parseTweetText(text: string): TweetEntity[] {
	const entities: TweetEntity[] = [];

	// Extract all entities from the text
	const hashtags = twitterText.extractHashtagsWithIndices(text);
	const mentions = twitterText.extractMentionsWithIndices(text);
	const urls = twitterText.extractUrlsWithIndices(text);
	const cashtags = twitterText.extractCashtagsWithIndices(text);

	// Combine all entities and sort by position
	const allEntities = [
		...hashtags.map((h) => ({ ...h, type: 'hashtag' as const })),
		...mentions.map((m) => ({ ...m, type: 'mention' as const })),
		...urls.map((u) => ({ ...u, type: 'url' as const })),
		...cashtags.map((c) => ({ ...c, type: 'cashtag' as const }))
	].sort((a, b) => a.indices[0] - b.indices[0]);

	let lastIndex = 0;

	for (const entity of allEntities) {
		// Add text before this entity
		if (entity.indices[0] > lastIndex) {
			entities.push({
				type: 'text',
				text: text.slice(lastIndex, entity.indices[0]),
				indices: [lastIndex, entity.indices[0]]
			});
		}

		// Add the entity itself
		const entityText = text.slice(entity.indices[0], entity.indices[1]);
		let url: string | undefined;

		switch (entity.type) {
			case 'hashtag':
				url = `https://twitter.com/hashtag/${entity.hashtag}`;
				break;
			case 'mention':
				url = `https://twitter.com/${entity.screenName}`;
				break;
			case 'url':
				url = entity.url;
				break;
			case 'cashtag':
				url = `https://twitter.com/search?q=%24${entity.cashtag}`;
				break;
		}

		entities.push({
			type: entity.type,
			text: entityText,
			url,
			indices: entity.indices
		});

		lastIndex = entity.indices[1];
	}

	// Add remaining text
	if (lastIndex < text.length) {
		entities.push({
			type: 'text',
			text: text.slice(lastIndex),
			indices: [lastIndex, text.length]
		});
	}

	return entities;
}

export function validateTweet(text: string) {
	return twitterText.parseTweet(text);
}

export function getTweetLength(text: string): number {
	return twitterText.getTweetLength(text);
}

export function isValidTweet(text: string): boolean {
	const parsed = twitterText.parseTweet(text);
	return parsed.valid;
}
