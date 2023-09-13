<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

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
	const active = getContext('active');
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
		<div class:text-blue-400={isHovered || isFocused}>
			<span>{title}</span>
		</div>
		<div class="accordion-item-icon" class:rotate-180={isCurrentActive}>Icon</div>
	</button>
	<!-- Content -->
	{#if isCurrentActive}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.collapse-item {
		border-bottom: 1px solid #ccc;

		&-header {
			background-color: #f0f0f0;
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			cursor: pointer;
			align-items: center;
			border-bottom: 1px solid #ccc;
		}

		//&-icon {
		//	font-size: 20px;
		//	transition: transform 0.3s ease;
		//}
		//
		//&-content {
		//	padding: 1rem;
		//	border-bottom: 1px solid #ccc;
		//}
		//
		//&.rotate-180 {
		//	transform: rotate(180deg);
		//}
	}
</style>
