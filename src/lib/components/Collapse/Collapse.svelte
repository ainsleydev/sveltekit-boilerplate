<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let active = false;
	export let accordion = false;
	export let open = false;

	// Sync the value of the active prop & store for 2 way binding.
	const activeStore = writable(active);
	$: activeStore.set(active);
	$: active = $activeStore;

	setContext('active', activeStore);
	setContext('accordion', accordion);
	setContext('open', open);
</script>

<!--
	@component

	Collapsible component that allows the collapsing of each item.

	The components props are explained below:
		- **id**: 		 Is required to ensure each item behaves independently from one another.
		- **accordion**: Determines if an item should be closed if one is expanded.
		- **open**: 	 Determines if all items are open on render.

	@example
	```svelte
	<Collapse accordion>
		<CollapseItem id="1" title="Title 1">
			Content 1
		</CollapseItem>
		<CollapseItem id="2" title="Title 2">
			Content 2
		</CollapseItem>
	</Collapse>
    ```
-->
<div class="collapse">
	<slot />
</div>

<style lang="scss">
	.collapse {
		position: relative;
	}
</style>
