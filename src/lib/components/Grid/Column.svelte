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
<div class="col" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	%column-props {
		position: relative;
		width: 100%;
		padding-left: var(--grid-gap-width);
		padding-right: var(--grid-gap-width);
	}

	// Loop over each modifier and breakpoint to construct the grid.
	// For example: $modifier = tab, $breakpoint = 1024px
	@each $modifier, $breakpoint in $grid-properties {
		.col#{$modifier}-auto {
			@extend %column-props;
		}

		@for $i from 1 through $grid-columns {
			.col#{$modifier}-#{$i} {
				@extend %column-props;
			}
		}
	}

	@each $modifier, $breakpoint in $grid-properties {
		@include create-col-classes($modifier, $grid-columns, $breakpoint);
	}
</style>
