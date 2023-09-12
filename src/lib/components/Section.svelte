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
	<Grid size="small" padding>
		Content
	</Grid>

	<Grid size="medium" margin>
		Content
	</Grid>
    ```
-->
<section class={size} class:padding class:margin>
	<slot />
</section>

<style lang="scss">
	$small: clamp(40px, 5vw, 140px);
	$medium: clamp(80px, 20vw, 200px);
	$large: clamp(120px, 30vw, 240px);

	section {
		position: relative;
		background: yellow;
	}

	.padding {
		padding: $medium 0;

		&.small {
			padding: $small 0;
		}

		&.large {
			padding: $large 0;
		}
	}

	.margin {
		margin: $medium 0;

		&.small {
			margin: $small 0;
		}

		&.large {
			margin: $large 0;
		}
	}
</style>
