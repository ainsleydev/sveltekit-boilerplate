<script>
	import Section from '$lib/components/Section.svelte';
	import Collapse from '$lib/components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/components/Collapse/CollapseItem.svelte';
	import Container from '$lib/components/Grid/Container.svelte';
	import Row from '$lib/components/Grid/Row.svelte';
	import Column from '$lib/components/Grid/Column.svelte';
	import Group from '$lib/components/Group.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import IconClose from '~icons/mdi/cross';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<!--
	Typography
	-->
<Section size="medium" padding>
	<Container>
		<Row nogaps>
			<Column>
				<h2>Typography</h2>
			</Column>
		</Row>
	</Container>
</Section>
<!--
	Components
	-->
<Section size="medium" padding>
	<Container>
		<Row nogaps>
			<Column class="col-12">
				<h2>Components</h2>
			</Column>
			<Column class="col-12">
				<!-- Collapse -->
				<Group>
					<Collapse accordion>
						<CollapseItem id="1">
							<h4 slot="title">Title 1</h4>
							I'm baby copper mug woke snackwave raw denim, tofu pork belly marfa scenester
							fingerstache praxis fashion axe iPhone. Neutral milk hotel tofu authentic,
							pork belly offal jawn cardigan pickled gatekeep mukbang cray. Tacos echo
							park YOLO selvage cold-pressed organic, biodiesel vape twee.
						</CollapseItem>
						<CollapseItem id="2">
							<h4 slot="title">Title 2</h4>
							I'm baby copper mug woke snackwave raw denim, tofu pork belly marfa scenester
							fingerstache praxis fashion axe iPhone. Neutral milk hotel tofu authentic,
							pork belly offal jawn cardigan pickled gatekeep mukbang cray. Tacos echo
							park YOLO selvage cold-pressed organic, biodiesel vape twee.
						</CollapseItem>
						<CollapseItem id="3">
							<h4 slot="title">Title 3</h4>
							I'm baby copper mug woke snackwave raw denim, tofu pork belly marfa scenester
							fingerstache praxis fashion axe iPhone. Neutral milk hotel tofu authentic,
							pork belly offal jawn cardigan pickled gatekeep mukbang cray. Tacos echo
							park YOLO selvage cold-pressed organic, biodiesel vape twee.
						</CollapseItem>
					</Collapse>
				</Group>
				<!-- Link -->
				<Link>This is my title</Link>
				<!-- Tags -->
				<Group>
					<Tag>Tag Component</Tag>
				</Group>
				<!-- Alerts -->
				<Group>
					<Alert dismiss>
						<p slot="text">Primary Alert</p>
					</Alert>
					<Alert --background="var(--colour-primary)">
						<p slot="text">Test</p>
					</Alert>
					<Alert dismiss>
						<figure slot="icon">
							<IconClose />
						</figure>
						<p slot="text">Primary Alert</p>
					</Alert>
				</Group>
			</Column>
		</Row>
	</Container>
</Section>
