<script lang="ts">
	type SpacingSizes = 'normal' | 'tiny' | 'small' | 'large' | 'none';
	type SpacingProperty = 'margin' | 'padding';

	export let size: SpacingSizes = 'normal';
	export let property = 'margin';
	export let top = false;
	export let bottom = true;
</script>

<!--
	@component

	Group defines a collection of HTML elements with spacing applied.

	@example
	```svelte
	<Group size="normal" margin>
		Content
	</Group>

	<Group size="large" padding>
		Content
	</Group>
    ```
-->
<div
	class="group group-size-{size}"
	class:group-property={property}
	class:group-bottom={bottom}
	class:group-top={top}
	{...$$restProps}
>
	<slot />
</div>

<style lang="scss">
	.group :global(p:last-child) {
		margin-bottom: 0;
	}

	//.group {
	//	$self: &;
	//	margin-bottom: var(--spacing-default);
	//
	//	&.group-property-margin &.group-bottom {
	//		background: pink;
	//	}
	//
	//	//&#{$self}-property-margin &#{$self}-bottom {
	//	//
	//	//
	//	//	&#{$self}-none {
	//	//		margin-bottom: 0 !important;
	//	//	}
	//	//
	//	//	&#{$self}-tiny {
	//	//		margin-bottom: var(--spacing-tiny);
	//	//	}
	//	//
	//	//	&#{$self}-small {
	//	//		margin-bottom: var(--spacing-small);
	//	//	}
	//	//
	//	//	&#{$self}-large {
	//	//		margin-bottom: var(--spacing-large);
	//	//	}
	//	//}
	//
	//	&#{$self}-top {
	//		margin-top: var(--spacing-default);
	//
	//		&#{$self}-tiny {
	//			margin-top: var(--spacing-tiny);
	//		}
	//
	//		&#{$self}-small {
	//			margin-top: var(--spacing-small);
	//		}
	//
	//		&#{$self}-large {
	//			margin-top: var(--spacing-large);
	//		}
	//	}
	//}
</style>
