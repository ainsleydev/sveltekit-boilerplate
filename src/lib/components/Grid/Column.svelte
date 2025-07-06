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
	@use 'sass:math';
	@use '../../scss/abstracts' as a;

	[class*='col-'] {
		position: relative;
		width: 100%;
		padding-left: a.$grid-gap;
		padding-right: a.$grid-gap;
	}

	%column-props {
		position: relative;
		width: 100%;
		padding-inline: a.$grid-gap;

		@include a.mq-max(mob) {
			padding-inline: 7px;
		}
	}

	@each $modifier, $breakpoint in a.$grid-properties {
		.col#{$modifier}-auto {
			@extend %column-props;
		}

		@for $i from 1 through a.$grid-columns {
			.col#{$modifier}-#{$i} {
				@extend %column-props;
			}
		}
	}

	@each $modifier, $breakpoint in a.$grid-properties {
		@include a.create-media-query($breakpoint) {

			// Columns
			.col#{$modifier}-auto {
				flex: 0 0 auto;
				width: auto;
				max-width: 100%;
			}

			@for $i from 1 through a.$grid-columns {
				.col#{$modifier}-#{$i} {
					width: #{math.div(100, math.div(a.$grid-columns, $i)) * 1%};
				}
			}

			// Offsets
			.offset#{$modifier}-0 {
				margin-left: 0;
			}

			@for $i from 1 through a.$grid-columns {
				.offset#{$modifier}-#{$i} {
					margin-left: #{math.div(100, math.div(a.$grid-columns, $i)) * 1%};
				}
			}
		}
	}


	@include a.mq-max(tab) {
		.col-6 {
			&:nth-child(odd) {
				padding-right: calc(var(--grid-gap-width) / 2);
			}

			&:nth-child(even) {
				padding-left: calc(var(--grid-gap-width) / 2);
			}
		}
	}
</style>
