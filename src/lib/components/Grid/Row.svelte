<script lang="ts">
	export let noGaps = false;
</script>

<!--
	@component

	Center content such as rows & columns horizontally with predefined max-width.

	@example
	```svelte
	<Row no-gaps>
		<Column></Column>
	</Row>
    ```
-->
<div class="row" class:no-gaps={noGaps} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	@use '../../scss/abstracts' as a;

	.row {
		display: flex;
		flex-wrap: wrap;
		margin-inline: -#{a.$grid-gap};

		@include a.mq-max(mob) {
			margin-inline: -7px;
		}
	}

	:global(.no-gaps) {
		margin-right: 0;
		margin-left: 0;

		> .col,
		> [class*='col-'] {
			padding-right: 0;
			padding-left: 0;
		}
	}
</style>
