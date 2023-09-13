<script>
	import Section from '$lib/components/Section.svelte';
	import Collapse from '$lib/components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/components/Collapse/CollapseItem.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section size="medium" padding>
	<Collapse accordion={false} open={false}>
		<CollapseItem id="0" title="I'm a title">Test 1</CollapseItem>
		<CollapseItem id="1" title="Title 2">Test 2</CollapseItem>
	</Collapse>
</Section>
