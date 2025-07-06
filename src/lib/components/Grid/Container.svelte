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
		$self: &;

		--wrapper-padding-inline: var(--container-padding);
		--wrapper-max-width: 1328px;
		--breakout-max-width: 1500px;
		--breakout-size: calc((var(--breakout-max-width) - var(--wrapper-max-width)) / 2);

		display: grid;
		width: 100%;
		position: relative;
		grid-template-columns:
			[full-width-start] minmax(var(--wrapper-padding-inline), 1fr)
			[breakout-start] minmax(0, var(--breakout-size))
			[content-start] min(
				100% - (var(--wrapper-padding-inline) * 2),
				var(--wrapper-max-width)
			)
			[content-end]
			minmax(0, var(--breakout-size)) [breakout-end]
			minmax(var(--wrapper-padding-inline), 1fr) [full-width-end];

		:global(> *) {
			grid-column: content;
		}

		:global(> .breakout) {
			grid-column: breakout;
		}

		:global(> .full-width) {
			display: grid;
			grid-column: full-width;
			grid-template-columns: inherit;
		}
	}
</style>
