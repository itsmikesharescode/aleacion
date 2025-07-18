<script lang="ts">
	import LeftSideBar from '$lib/components/externals/sidebars/left-sidebar/left-sidebar.svelte';
	import RightSideBar from '$lib/components/externals/sidebars/right-sidebar/right-sidebar.svelte';
	const { children } = $props();
</script>

<main>
	<section class="container mx-auto grid w-full grid-cols-[auto_1fr] xl:grid-cols-[320px_1fr_auto]">
		<LeftSideBar />
		{@render children()}
		<RightSideBar />
	</section>
</main>
