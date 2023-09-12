<script>
	import Section from '$lib/components/Section.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section size="medium" padding>
	<Accordion>
		<AccordionItem title="I'm a title">Test 1</AccordionItem>
		<AccordionItem>Test 2</AccordionItem>
	</Accordion>
</Section>
