<script lang="ts">
	import '../richtext-editor.css';
	interface Props {
		markdown: string;
	}

	const { markdown }: Props = $props();
</script>

<div class="lexical-content-renderer">
	{@html markdown}
</div>
