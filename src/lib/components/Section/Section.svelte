<!-- =====================
    Section
    ===================== -->
<script lang="ts">
	import type { HTMLDialogAttributes } from 'svelte/elements';

	interface $$Props extends HTMLDialogAttributes {
		size: 'small' | 'medium' | 'large';
		padding: boolean;
		margin: boolean;
	}

	export let size = 'medium';
	export let padding = false;
</script>

<section class="section {size} {padding ? 'padding' : ''}">
	<slot />
</section>

<style lang="scss">
	$medium: clamp(80px, 20vw, 200px);
	$small: clamp(40px, 5vw, 140px);
	$large: clamp(120px, 30vw, 240px);

	.section {
		position: relative;
		background: green;

		&.padding {
			background: red;

			&.small {
			}
		}
	}
</style>
