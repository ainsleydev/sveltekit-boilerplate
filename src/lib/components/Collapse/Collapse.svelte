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

<div class="collapse">
	<slot />
</div>

<style lang="scss">
	.collapse {
		position: relative;
		padding: 1rem;
	}
</style>
