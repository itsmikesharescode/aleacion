<script lang="ts">
	import IconHome from '@tabler/icons-svelte/icons/home';
	import IconSearch from '@tabler/icons-svelte/icons/search';
	import IconBellRinging from '@tabler/icons-svelte/icons/bell-ringing';
	import IconMail from '@tabler/icons-svelte/icons/mail';
	import IconUser from '@tabler/icons-svelte/icons/user';
	import IconMessageCircleQuestion from '@tabler/icons-svelte/icons/message-circle-question';
	import Button from '$lib/components/internals/button/button.svelte';
	import { ScrollArea } from '$lib/components/internals/scroll-area/index';

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

<aside class="bg-secondary sticky top-0 w-fit border-r">
	<ScrollArea class="h-[100dvh]">
		<div class="flex flex-col items-center justify-center gap-8 p-4 lg:items-start">
			{#each leftSideBarRoutes as routes}
				<Button
					variant="ghost"
					href={routes.href}
					class="hover:bg-secondary border-secondary hover:border-primary flex w-full items-center justify-start gap-4 border transition-all"
				>
					<routes.icon class="size-7" />
					<span class="hidden lg:block">{routes.label}</span>
				</Button>
			{/each}
			<Button class="h-14 rounded-full lg:w-full">
				<IconMessageCircleQuestion class="size-8 lg:hidden" />
				<span class="hidden lg:block">Post</span>
			</Button>
		</div>
	</ScrollArea>
</aside>
