<script lang="ts">
</script>

<div class="tag">
	<slot />
</div>

<style lang="scss">
	.tag {
		$self: &;
		position: relative;
		display: inline-flex;
		margin: 0 4px;
		padding: 2px 10px;
		background-color: $white;
		color: $black;
		font-size: 0.9rem;
		border-radius: 4px;
		user-select: none;
		font-weight: 500;
		white-space: nowrap;

		&:first-of-type {
			margin-left: 0;
		}

		&:last-of-type {
			margin-left: 0;
			margin-right: 0;
		}
	}
</style>
