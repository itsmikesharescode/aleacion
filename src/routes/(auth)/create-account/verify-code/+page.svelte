<script lang="ts">
	import VerifyCode from './(components)/verify-code.svelte';
	const { data } = $props();
</script>

<section class="flex h-screen flex-col items-center justify-center gap-6 p-4 sm:p-10 md:p-0">
	<VerifyCode verifyCodeForm={data.verifyCodeForm} />
</section>
