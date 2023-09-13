<!--
	@component

	Columns build on the responsive grid system by allowing how columns
	grow, shrink and change at different viewports.

	@example
	```svelte
	<Column class="col-12 col-tab-10 col-desk-4">
		Content
	</Column>
    ```
-->
<div class="col-12" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	[class*='col-'] {
		position: relative;
		width: 100%;
		padding-left: $gap-width;
		padding-right: $gap-width;
	}

	@include media-mob-down {
		.col-6 {
			&:nth-child(odd) {
				padding-right: calc(var(--grid-gap-width) / 2);
			}

			&:nth-child(even) {
				padding-left: calc(var(--grid-gap-width) / 2);
			}
		}
	}

	@each $modifier, $breakpoint in $grid-properties {
		@include create-mediaquery($breakpoint) {
			// Columns
			.col#{$modifier}-auto {
				flex: 0 0 auto;
				width: auto;
				max-width: 100%;
			}

			@for $i from 1 through $grid-columns {
				.col#{$modifier}-#{$i} {
					width: calc(100 / ($grid-columns / ($i * 1%)));
				}
			}

			// Offsets
			.offset#{$modifier}-0 {
				margin-left: 0;
			}

			@for $i from 1 through $grid-columns {
				.offset#{$modifier}-#{$i} {
					margin-left: calc(100 / ($grid-columns / ($i * 1%)));
				}
			}
		}
	}
</style>
