<script lang="ts">
	import { fade } from 'svelte/transition';
	export let dismiss = false;
	export let icon = false;

	let visible = true;
	const hide = () => (visible = false);
</script>

<!--
	@component

	Display a contextual feedback to users with actions and merssages.

	@example
	```svelte
	<Alert icon dismiss>
		Content
	</Alert>
    ```
-->
{#if visible}
	<div class="alert" transition:fade={{ duration: 300 }} role="alert" {...$$restProps}>
		{#if icon}
			<i />
		{/if}
		<slot />
		{#if dismiss}
			<button class="" on:click={hide}>Close</button>
		{/if}
	</div>
{/if}

<style lang="scss">
	.alert {
		$self: &;
		position: relative;
		display: flex;
		justify-content: space-between;
		background-color: $primary;
		width: 100%;
		padding: 1rem;
		border-radius: 4px;

		&-text {
			color: $white;
			margin-bottom: 0;
			line-height: 1.3;
		}
	}
</style>
