<script lang="ts">
	import VerifyCode from './(components)/verify-code.svelte';
	const { data } = $props();
</script>

<main class="container flex h-screen flex-col justify-center p-4 sm:p-0">
	<VerifyCode verifyCodeForm={data.verifyCodeForm} />
</main>
