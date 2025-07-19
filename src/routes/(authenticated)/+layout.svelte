<script lang="ts">
	import LeftSideBar from '$lib/components/externals/sidebars/left-sidebar/left-sidebar.svelte';
	import RightSideBar from '$lib/components/externals/sidebars/right-sidebar/right-sidebar.svelte';
	const { children } = $props();
</script>

<main class="h-[100dvh] min-w-0">
	<section class="container mx-auto grid w-full grid-cols-[auto_1fr] xl:grid-cols-[320px_1fr_auto]">
		<LeftSideBar class="w-fit xl:w-full" />
		<div class="h-[100dvh] min-w-0">
			{@render children()}
		</div>
		<RightSideBar class="hidden w-fit xl:block xl:w-full" />
	</section>
</main>
