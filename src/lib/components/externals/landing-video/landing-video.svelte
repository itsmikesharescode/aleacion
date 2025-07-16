<script lang="ts">
	import IconPlay from '@tabler/icons-svelte/icons/player-play';
	import IconPause from '@tabler/icons-svelte/icons/player-pause';
	import IconVolume from '@tabler/icons-svelte/icons/volume';
	import IconVolumeOff from '@tabler/icons-svelte/icons/volume-off';

	import Button from '$lib/components/internals/button/button.svelte';
	import { Progress } from '$lib/components/internals/progress/index';

	let isMuted = $state(true);
	let isPlaying = $state(false);
	let currentTime = $state(0);
	let duration = $state(0);
	let progress = $state(0);

	let videoElement = $state<HTMLVideoElement | null>(null);
</script>

<div class="group bg-primary/50 relative h-[324px] w-full rounded-lg">
	<video
		bind:this={videoElement}
		loop
		autoplay
		muted
		playsinline
		preload="auto"
		src="https://sveltejs.github.io/assets/svelte-origins-preview.mp4"
		class="border-primary h-full w-full rounded-lg border-2 object-cover"
		ontimeupdate={(e) => {
			if (!videoElement) return;
			duration = videoElement.duration;
			currentTime = videoElement.currentTime;
			progress = duration > 0 ? (currentTime / duration) * 100 : 0;
		}}
	>
		<track kind="captions" />
	</video>

	<Button
		onclick={() => {
			if (!videoElement) return;
			isMuted = !isMuted;
			videoElement.muted = isMuted;
		}}
		size="icon"
		class="absolute top-2 right-2"
	>
		{#if isMuted}
			<IconVolumeOff />
		{:else}
			<IconVolume />
		{/if}
	</Button>

	<div class="flex w-full items-center gap-2 py-2">
		<Button
			onclick={async () => {
				if (!videoElement) return;
				isPlaying = !isPlaying;
				if (isPlaying) {
					await videoElement.play();
				} else {
					videoElement.pause();
				}
			}}
			size="icon"
		>
			{#if isPlaying}
				<IconPause />
			{:else}
				<IconPlay />
			{/if}
		</Button>
		<Progress value={progress} class="z-20 h-4 w-full" />
	</div>
</div>
