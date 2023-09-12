<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let active = false;

	// Sync the value of the active prop & store for 2 way binding.
	const activeStore = writable(active);
	$: activeStore.set(active);
	$: active = $activeStore;

	setContext('context', activeStore);
</script>

<div class="accordion">
	<slot />
</div>

<style lang="scss">
	.accordion {
		position: relative;
		//display: flex;
		//flex-direction: column;
		background: $white;
	}
</style>
