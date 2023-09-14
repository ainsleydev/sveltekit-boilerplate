<script lang="ts">
	export let alt = '';
	export let width = '';
	export let height = '';
	export let src = '';
	export let thumbnail = '';

	let loaded = false;
	let loading = false;
</script>

<!--
	@component

	Image displays a rendered HTML image using <picture>

	@example
	```svelte
	<Image href="/images/my-image.jpg" alt="Alternative" />
    ```
-->
<picture class="image {$$props.class}" {...$$restProps}>
	{#if loaded}
		<img class={$$props.class} {src} {alt} {width} {height} />
	{:else if thumbnail}
		<img class={$$props.class} src={thumbnail} {alt} {width} {height} />
	{:else if loading}
		<slot name="loading" />
	{/if}
</picture>

<style lang="scss">
	.image {
		position: relative;
		display: block;
		height: auto;
	}
</style>
