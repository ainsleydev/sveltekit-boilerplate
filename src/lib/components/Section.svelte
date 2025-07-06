<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let padding = false;
	export let margin = false;
</script>

<!--
	@component

	Display a horizontal section that divides page blocks.

	@example
	```svelte
	<Section size="small" padding>
		Content
	</Section>

	<Section size="medium" margin>
		Content
	</Section>
    ```
-->
<section
	class="section section-size={size}"
	class:section-padding={padding}
	class:section-margin={margin}
>
	<slot />
</section>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.section {
		$self: &;
		position: relative;
		overflow-y: clip;

		&-padding {
			padding-block: a.$section-75;

			&#{$self}-small {
				padding-block: a.$section-50;
			}

			&#{$self}-large {
				padding-block: a.$section-100;
			}
		}

		&-margin {
			margin-block: a.$section-75;

			&#{$self}-small {
				margin-block: a.$section-75;
			}

			&#{$self}-large {
				margin-block: a.$section-75;
			}
		}
	}
</style>
