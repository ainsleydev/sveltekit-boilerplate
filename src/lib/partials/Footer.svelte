<script>
	import Container from '$lib/components/Grid/Container.svelte';
	import Row from '$lib/components/Grid/Row.svelte';
	import Column from '$lib/components/Grid/Column.svelte';

	const year = new Date().getFullYear();
</script>

<!--
	@component

	Display the footer of the website which renders menus, copyright and other information.
	TODO: Footers are very unique to each website, and therefore only resets have been applied.

-->
<footer class="footer">
	<Container>
		<Row>
			<Column class="col-12 col-tab-6">
				<p aria-hidden="true">&copy; {year}, All Rights Reserved</p>
			</Column>
			<Column class="col-12 col-tab-6">
				<p><a href="#home">Back to the top ↑</a></p>
			</Column>
		</Row>
	</Container>
</footer>

<style lang="scss">
	.footer {
		$self: &;
		position: relative;
		display: block;
		overflow: hidden;
		background-color: var(--colour-foreground);
	}
</style>
