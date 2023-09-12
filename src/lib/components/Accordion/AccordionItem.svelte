<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	// https://svelte.dev/repl/0d592275ba814ea682a4292b401f0421?version=4.2.0

	export let id = '';
	export let title = '';

	let isHovered = false;
	let isFocused = false;

	const active = getContext('context');
	$: isCurrentActive = $active === id;

	const onClick = () => {
		console.log($active, id);

		isCurrentActive ? ($active = null) : ($active = id);
	};
</script>

<!--
	@component

	TODO

	@example
	```svelte
	TODO
    ```
-->
<div class="accordion-item">
	<!-- Header -->
	<button
		class="accordion-header"
		on:click={onClick}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
	>
		<div class:text-blue-400={isHovered || isFocused}>
			<span>{title}</span>
		</div>
		<div class="accordion-icon" class:rotate-180={isCurrentActive}>Icon</div>
	</button>
	<!-- Content -->
	{#if isCurrentActive}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.accordion {
		&-item {
			padding: 1rem;
			outline: none;
			background: $white;
			border-bottom: 1px solid red;
		}

		&-header {
			display: flex;
			justify-content: space-between;
			width: 100%;
			cursor: pointer;
		}
	}
</style>
