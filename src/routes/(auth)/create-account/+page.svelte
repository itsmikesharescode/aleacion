<script lang="ts">
	import CreateAccount from './(components)/(create-account)/create-account.svelte';

	const { data } = $props();
</script>

<main class="flex h-screen flex-col items-center justify-center gap-6 p-4 sm:p-10 md:p-0">
	<CreateAccount createAccForm={data.createAccForm} />
</main>
