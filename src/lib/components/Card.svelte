<script lang="ts">
	export let title = '';
</script>

<!--
	@component

	Display flexible and extensible containers with a wide variety of options.
	TODO: Cards are very unique to each website, and therefore only resets have been applied.

	@example
	```svelte

    ```
-->
<div class="card">
	<div class="card-body">
		<div class="card-title">
			{title}
		</div>
		<div class="card-text">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		$self: &;
		position: relative;
		display: block;
		text-decoration: none;
		margin-bottom: 3.75rem;
		user-select: none;
	}
</style>
