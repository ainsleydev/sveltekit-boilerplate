<script lang="ts">
</script>

<div class="alert" role="alert">
	<slot />
</div>

<style lang="scss">
	.alert {
		$self: &;
		position: relative;
		width: 100%;
		padding: 1rem;
		border-radius: 4px;

		&-text {
			color: $white;
			margin-bottom: 0;
			line-height: 1.3;
		}
	}
</style>
