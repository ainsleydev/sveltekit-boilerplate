<script>
	import Section from '$lib/components/Section.svelte';
	import Collapse from '$lib/components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/components/Collapse/CollapseItem.svelte';
	import Container from '$lib/components/Grid/Container.svelte';
	import Row from '$lib/components/Grid/Row.svelte';
	import Column from '$lib/components/Grid/Column.svelte';
	import Tag from '$lib/components/Tag.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section size="medium" padding>
	<Container>
		<Row nogaps>
			<Column class="col-12 col-desk-3">
				<Collapse accordion>
					<CollapseItem id="1" title="Title 1">Content 1</CollapseItem>
					<CollapseItem id="2" title="Title 2">Content 2</CollapseItem>
				</Collapse>
				<Tag>Hey I'm a tag</Tag>
			</Column>
		</Row>
	</Container>
</Section>
