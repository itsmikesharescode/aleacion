<script lang="ts">
	import IconHome from '@tabler/icons-svelte/icons/home';
	import IconSearch from '@tabler/icons-svelte/icons/search';
	import IconBellRinging from '@tabler/icons-svelte/icons/bell-ringing';
	import IconMail from '@tabler/icons-svelte/icons/mail';
	import IconUser from '@tabler/icons-svelte/icons/user';
	import Button from '$lib/components/internals/button/button.svelte';
	import { ScrollArea } from '$lib/components/internals/scroll-area/index';
	import * as Popover from '$lib/components/internals/popover/index';
	import IconDots from '@tabler/icons-svelte/icons/dots';
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';
	import CreatePost from '$lib/components/externals/create-post/create-post.svelte';

	interface Props {
		class?: ClassNameValue;
	}

	const { class: className }: Props = $props();

	const leftSideBarRoutes = [
		{
			icon: IconHome,
			href: '/',
			label: 'Home'
		},
		{
			icon: IconSearch,
			href: '/',
			label: 'Search'
		},
		{
			icon: IconBellRinging,
			href: '/',
			label: 'Notification'
		},
		{
			icon: IconMail,
			href: '/',
			label: 'Mails'
		},
		{
			icon: IconUser,
			href: '/',
			label: 'Profile'
		}
	];
</script>

<aside class={cn('w-full', className)}>
	<ScrollArea class="h-[100dvh]">
		<div class="flex h-full flex-col">
			<div class="flex w-full flex-col items-center justify-center gap-4 p-4 lg:items-start">
				{#each leftSideBarRoutes as routes}
					<Button
						variant="ghost"
						href={routes.href}
						class="hover:bg-secondary hover:border-primary flex w-full items-center justify-start gap-4 rounded-full transition-all"
					>
						<routes.icon class="size-4" />
						<span class="hidden xl:block">{routes.label}</span>
					</Button>
				{/each}

				<CreatePost />
			</div>

			<div class="mt-auto flex items-center justify-center pb-4">
				<Popover.Root>
					<Popover.Trigger
						class="hover:bg-sidebar-border grid items-center gap-2 rounded-full  transition-all xl:w-full xl:grid-cols-[auto_1fr_auto] xl:p-2"
					>
						<div class="bg-primary size-10 rounded-full"></div>

						<div class="hidden flex-col items-start overflow-hidden xl:flex">
							<span class="truncate text-sm">Mike John</span>
							<span class="text-muted-foreground truncate text-xs">@mikeyrue</span>
						</div>

						<IconDots class="hidden size-4 xl:block" />
					</Popover.Trigger>

					<Popover.Content sideOffset={2}>
						<Button variant="ghost" class="w-full justify-start">Logout @mikeyrue</Button>
					</Popover.Content>
				</Popover.Root>
			</div>
		</div>
	</ScrollArea>
</aside>
