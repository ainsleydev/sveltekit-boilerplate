<script lang="ts">
	export let gaps = true;
	// export let flex = '';
</script>

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
<div class="row" class:no-gaps={gaps} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-wrap: wrap;
		margin-left: -$gap-width;
		margin-right: -$gap-width;

		@include media-mob-down {
			&-small-gap-mob > [class*='col-'] {
				&:nth-child(odd) {
					padding-right: $gap-width / 2;
				}

				&:nth-child(even) {
					padding-left: $gap-width / 2;
				}
			}
		}
	}

	.no-gaps {
		margin-right: 0;
		margin-left: 0;

		> .col,
		> [class*='col-'] {
			padding-right: 0;
			padding-left: 0;
		}
	}
</style>
