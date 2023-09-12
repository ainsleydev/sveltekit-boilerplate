<!-- =====================
    Card
    ===================== -->
<script lang="ts">
	export let image = null;
	export let title = '';
	export let text = '';
</script>

<div class="card">
	<!-- Image -->
	<picture class="card-image">
		{image}
	</picture>
	<!-- Body -->
	<div class="card-body">
		<div class="card-title">
			{title}
		</div>
		<div class="card-text">
			{text}
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		$self: &;
		position: relative;
		display: block;
		text-decoration: none;
		margin-bottom: 3.75rem;
		user-select: none;
	}
</style>
