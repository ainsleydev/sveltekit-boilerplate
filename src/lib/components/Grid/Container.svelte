<!--
	@component

	Center content such as rows & columns horizontally with predefined max-width.

	@example
	```svelte
	<Container size="small" padding>
		<Row></Row>
	</Container>
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
		max-width: var(--grid-container-width);
		padding: 0 var(--grid-container-padding);

		@media (min-width: calc(var(--grid-container-width) + 100px)) {
			padding: 0;
		}
	}
</style>
