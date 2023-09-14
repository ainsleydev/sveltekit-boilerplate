<script lang="ts">
	import { fade } from 'svelte/transition';
	import IconClose from '~icons/mdi/close';

	export let dismiss = false;

	let visible = true;
	const hide = () => (visible = false);
</script>

<!--
	@component

	Display a contextual feedback to users with actions and messages.

	The components props are explained below:
		- **text**: 	The text to display inside the alert.
		- **dismiss**: 	Determines if a close icon should be rendered.
		- **icon**: 	An optional icon alongside the alert.

	@example
	```svelte
	<Alert>
		<p slot="text">Content</p>
	</Alert>

	<Alert dismiss>
		<figure slot="icon">
			<IconClose></IconClose>
		</figure>
		<p slot="text">Content</p>
	</Alert>
    ```
-->
{#if visible}
	<div class="alert" transition:fade={{ duration: 300 }} role="alert" {...$$restProps}>
		<slot name="icon" />
		<slot name="text" />
		{#if dismiss}
			<button class="alert-dismiss" on:click={hide} aria-label="Close">
				<IconClose class="alert-dismiss" style="font-size: 1.2rem;" />
			</button>
		{/if}
	</div>
{/if}

<style lang="scss">
	.alert {
		$self: &;
		position: relative;
		display: flex;
		align-items: center;
		background-color: var(--background, var(--colour-foreground));
		width: 100%;
		padding: 1rem;
		border-radius: 4px;

		:global([slot='text']) {
			color: #fff;
			margin-bottom: 0;
			line-height: 1.3;
		}

		:global([slot='icon']) {
			color: #fff;
			margin-right: 10px;
		}

		&-dismiss {
			cursor: pointer;
			margin-left: auto;
		}
	}
</style>
