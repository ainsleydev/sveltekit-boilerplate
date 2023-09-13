<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import HomeIcon from '~icons/mdi/home';

	export let id = '';
	export let title = '';

	let isHovered = false;
	let isFocused = false;
	let isOpen = false;
	let isCurrentActive = false;

	// Determines if the collapsible content should be open when
	// the component mounts.
	$: isOpen = getContext('open');

	// Obtains the active ID, this will allow
	let active = getContext('active');
	$: isCurrentActive = isOpen ? true : isAccordion ? $active === id : isOpen;

	// Determines if the collapse should open content one at a time
	// as opposed to all of them at once.
	const isAccordion = getContext('accordion');

	const onClick = () => {
		if (isAccordion) {
			isCurrentActive ? ($active = null) : ($active = id);
			isOpen = false;
			return;
		}
		isCurrentActive = !isCurrentActive;
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
<div class="item">
	<!-- Header -->
	<button
		class="item-header"
		on:click={onClick}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
	>
		<span class:item-header-focused={isHovered || isFocused}>
			{title}
		</span>
		<i class="item-icon" class:item-rotate={isCurrentActive}>
			<HomeIcon />
		</i>
	</button>
	<!-- Content -->
	{#if isCurrentActive}
		<div class="item-content" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.item {
		width: 100%;
		border-bottom: 1px solid #ccc;
		background-color: transparent;
		padding: 2rem 0;
		color: color('foreground');
		-webkit-appearance: none;
		appearance: none;

		&-header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			border: none;
			background: none;
			padding: 0;
		}

		&-content {
			padding-top: 1rem;
		}

		&-icon {
			transition: transform 300ms ease;
			will-change: transform;
		}

		&-rotate {
			transform: rotate(180deg);
		}
	}
</style>
