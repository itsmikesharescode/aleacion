<script lang="ts">
	import LeftSidebar from './(components)/(left-sidebar)/left-sidebar.svelte';
	import Content from './(components)/(content)/content.svelte';
	import RightSidebar from './(components)/(right-sidebar)/right-sidebar.svelte';
</script>

<main class="">
	<section class="container mx-auto grid w-full grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto]">
		<LeftSidebar />
		<Content />
		<RightSidebar />
	</section>
</main>
