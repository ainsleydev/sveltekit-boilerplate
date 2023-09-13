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
	$small: clamp(40px, 5vw, 140px);
	$medium: clamp(80px, 20vw, 200px);
	$large: clamp(120px, 30vw, 240px);

	.section {
		$self: &;
		position: relative;

		&-padding {
			padding: $medium 0;

			&#{$self}-small {
				padding: $small 0;
			}

			&#{$self}-large {
				padding: $large 0;
			}
		}

		&-margin {
			margin: $medium 0;

			&#{$self}-small {
				margin: $small 0;
			}

			&#{$self}-large {
				margin: $large 0;
			}
		}
	}
</style>
