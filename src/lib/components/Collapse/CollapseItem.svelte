<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import IconChevron from '~icons/mdi/chevron-down';

	export let id: string;

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
	Note that the ID has to be unique in order for the component to render correctly.

	@example
    ```svelte
    <CollapseItem id="1">
		<h4 slot="title">Title 1</h4>
		Content
		Content
	</CollapseItem>
    ```
-->
<div class="collapse-item">
	<!-- Header -->
	<button
		class="collapse-item-header"
		on:click={onClick}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
	>
		<span
			class="collapse-item-title"
			class:collapse-item-header-focused={isHovered || isFocused}
		>
			<slot name="title" />
		</span>
		<span class="collapse-item-icon" class:collapse-item-rotate={isCurrentActive}>
			<IconChevron style="font-size: 1.6rem;" />
		</span>
	</button>
	<!-- Content -->
	{#if isCurrentActive}
		<div class="collapse-item-content" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.collapse-item-title :global(*) {
		margin-bottom: 0;
	}

	.collapse-item {
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
