<script lang="ts">
	export let title = '';
	export let text = '';
</script>

<!--
	@component

	Theme/website specific card layout.
	TODO: Cards are very unique to each client, and therefore only resets have been applied.

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
			{text}
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
