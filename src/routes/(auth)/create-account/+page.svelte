<script lang="ts">
	import CreateAccount from './(components)/(create-account)/create-account.svelte';

	const { data } = $props();
</script>

<main class="container flex h-screen flex-col justify-center p-4 sm:p-0">
	<CreateAccount createAccForm={data.createAccForm} />
</main>
