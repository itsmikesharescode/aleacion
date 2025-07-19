<script lang="ts">
	import { ScrollArea } from '$lib/components/internals/scroll-area/index';
	import * as Dialog from '$lib/components/internals/dialog/index';
	import { buttonVariants } from '$lib/components/internals/button';
	import RichTextEditor from '$lib/components/externals/richtext-editor/richtext-editor.svelte';
	import IconMessageCircleQuestion from '@tabler/icons-svelte/icons/message-circle-question';
	import Button from '$lib/components/internals/button/button.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default', class: 'rounded-full xl:w-full' })}>
		<IconMessageCircleQuestion class="size-4 xl:hidden" />
		<span class="hidden xl:block">Post</span>
	</Dialog.Trigger>

	<Dialog.Content
		class="top-[5%] flex min-h-screen min-w-screen translate-y-[-5%] flex-col gap-2 p-0 md:min-h-fit md:w-full md:max-w-[1150px] md:min-w-0"
	>
		<Dialog.Header class="px-6 pt-6">
			<Dialog.Title>Create Post</Dialog.Title>
		</Dialog.Header>

		<ScrollArea class="p-6 py-0">
			<div class="max-h-[calc(100dvh-10rem)] min-w-0 md:max-h-[80dvh]">
				<RichTextEditor />
			</div>
		</ScrollArea>
		<Button class="m-6 mt-0 ml-auto">Post</Button>
	</Dialog.Content>
</Dialog.Root>
