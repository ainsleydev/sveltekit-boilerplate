<script>
	import Header from '$lib/partials/Header.svelte';
	import Footer from '$lib/partials/Footer.svelte';
</script>

<Header />
<div class="wrapper">
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@include full-height;
	}
</style>
