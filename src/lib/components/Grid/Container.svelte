<!--
	@component

	Center content such as rows & columns horizontally with predefined max-width.

	@example
	```svelte
	<Grid size="small" padding>
		Content
	</Grid>
    ```
-->
<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		position: relative;
		display: block;
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		max-width: $container-max-width;
		padding: 0 $container-padding-x;

		@media (min-width: $container-max-width + 100) {
			padding: 0;
		}
	}
</style>
