<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/internals/sonner/index';

	let { children } = $props();
</script>

<ModeWatcher />
<Toaster position="bottom-center" />
{@render children()}
