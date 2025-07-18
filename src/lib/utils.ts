import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
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
