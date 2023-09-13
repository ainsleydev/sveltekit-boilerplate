<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import Chevron from '~icons/mdi/chevron-down';

	export let id = '';
	export let title = '';

	let isHovered = false;
	let isFocused = false;
	let isOpen = false;
	let active: string | null = null;
	let isCurrentActive = false;

	// Determines if the collapsible content should be open when
	// the component mounts.
	$: isOpen = getContext('open');

	// Obtains the active ID, this will allow
	$: active = getContext('active');
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

	Item of an collapsible component.

	@example
    ```svelte
    <CollapseItem id="2" title="Title 2">
		Content 2
	</CollapseItem>
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
		<span class="item-icon" class:item-rotate={isCurrentActive}>
			<Chevron style="font-size: 1.6rem;" />
		</span>
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
		border-bottom: 1px solid var(--colour-foreground);
		background-color: transparent;
		color: var(--colour-foreground);
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
			padding: 1.6rem 0;
		}

		&-content {
			padding-bottom: 1.6rem;
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
