<script lang="ts">
	import LandingVideo from '$lib/components/externals/landing-video/landing-video.svelte';

	const { children } = $props();
</script>

<main class="bg-background">
	<div class="mx-auto grid-cols-2 gap-2 md:container md:grid">
		<section class="hidden items-center justify-center md:flex">
			<LandingVideo />
		</section>

		{@render children()}
	</div>
</main>
