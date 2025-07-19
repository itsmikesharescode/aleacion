<script lang="ts">
	import { ScrollArea } from '$lib/components/internals/scroll-area/index';
	import * as Dialog from '$lib/components/internals/dialog/index';
	import { buttonVariants } from '$lib/components/internals/button';
	import RichTextEditor from '$lib/components/externals/richtext-editor/richtext-editor.svelte';
	import IconMessageCircleQuestion from '@tabler/icons-svelte/icons/message-circle-question';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default', class: 'rounded-full xl:w-full' })}>
		<IconMessageCircleQuestion class="size-4 xl:hidden" />
		<span class="hidden xl:block">Post</span>
	</Dialog.Trigger>

	<Dialog.Content
		class="top-[20%] flex min-h-screen min-w-screen translate-y-[-20%] flex-col p-0 md:min-h-fit md:w-full md:max-w-[1024px] md:min-w-0"
	>
		<Dialog.Header class="p-6 pb-0">
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Dialog.Description>
		</Dialog.Header>

		<ScrollArea class="p-6 pt-0">
			<div class="max-h-[60dvh] min-w-0">
				<RichTextEditor />
			</div>
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>
