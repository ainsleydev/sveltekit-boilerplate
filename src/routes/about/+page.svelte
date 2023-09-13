<script>
	import Section from '$lib/components/Section.svelte';
	import Accordion from '$lib/components/Collapse/Collapse.svelte';
	import AccordionItem from '$lib/components/Collapse/CollapseItem.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section size="medium" padding>
	<Accordion accordion={false} open={false}>
		<AccordionItem id="0" title="I'm a title">Test 1</AccordionItem>
		<AccordionItem id="1" title="Title 2">Test 2</AccordionItem>
	</Accordion>
</Section>
