<script>
	import { browser } from '$app/environment';
	import Header from '$lib/partials/Header.svelte';
	import Footer from '$lib/partials/Footer.svelte';

	if (browser) {
		const html = window.document.getElementsByTagName('html')[0];
		html.classList.remove('no-js');
		html.classList.add('js');
	}
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
