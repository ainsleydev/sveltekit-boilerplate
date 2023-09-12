<!-- =====================
    Home
    ===================== -->
<script>
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section/Section.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section padding={true}>
	<Button classes="custom-class" loading={false} aria-label="Custom Button">Click Me</Button>
</Section>
