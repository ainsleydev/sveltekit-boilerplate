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
			<button class="alert__dismiss" on:click={hide} aria-label="Close">
				<IconClose class="alert-dismiss" style="font-size: 1.2rem;" />
			</button>
		{/if}
	</div>
{/if}

<style lang="scss">
	@use '../scss/abstracts' as a;

	.alert {
		--_alert-bg-colour: transparent;
		--_alert-border-colour: var(--token-border-default);
		--_alert-text-colour: var(--token-text-body);
		--_alert-icon-colour: var(--token-icon-dark);
		--_alert-border-radius: #{a.$border-radius-6};

		$self: &;
		position: relative;
		display: flex;
		align-items: center;
		background-color: var(--_alert-bg-colour);
		border: 1px solid var(--_alert-border-colour);
		width: 100%;
		padding: 1rem;
		border-radius: var(--_alert-border-radius);
		margin-bottom: 0.5rem;

		:global([slot='text']) {
			color: var(--_alert-text-colour);
			margin-bottom: 0;
			line-height: 1.3;
		}

		:global([slot='icon']) {
			color: var(--_alert-icon-colour);
			margin-right: 10px;
		}

		&__dismiss {
			cursor: pointer;
			margin-left: auto;
		}
	}
</style>
