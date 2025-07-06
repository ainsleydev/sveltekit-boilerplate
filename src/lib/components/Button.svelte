<script lang="ts">
	export let href = '';
	export let loading = false;
	export let label: string;
	export let colour: 'primary' | 'secondary' | 'grey' = 'primary'
</script>

<!--
	@component

	A button or link element.
	If the href prop is passed, a link will be rendered instead of a button.

	@example
    ```svelte
    <Button label="Aria Label" --colour="var(--colour-primary)" --background="var(--colour-primary)">
    	Content
    </Button>

    <Button href="https://ainsley.dev" label="Aria Label">
    	Content
    </Button>
    ```
-->
<div class="btn__wrapper">
	{#if href}
		<a
			{href}
			class="btn btn--colour btn--colour--{colour}"
			role="button"
			aria-label={label}
			class:btn-loading={loading}
			{...$$restProps}
		>
			<slot />
		</a>
	{:else}
		<button
			class="btn btn--colour btn--colour--{colour}"
			aria-label={label}
			class:btn--loading={loading}
			{...$$restProps}
		>
			<slot />
		</button>
	{/if}
</div>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.btn {
		$self: &;

		--_btn-padding: 14px 28px;
		--_btn-colour: var(--token-text-negative, #{a.$text-negative});
		--_btn-background-colour: var(--token-surface-primary, #{a.$surface-primary});
		--_btn-background-colour-hover: var();
		--_btn-border-radius: #{a.$border-radius-6};
		--_btn-hover-colour: var(--token-text-negative, #{a.$text-negative});
		--_btn-hover-bg-colour: var(--colour-blue-600);

		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		border: none;
		padding: var(--_btn-padding);
		color: var(--_btn-colour);
		background-color: var(--_btn-background-colour);
		border-radius: var(--_btn-border-radius);
		outline: none;
		font-size: 1rem;
		font-weight: 600;
		height: auto;
		cursor: pointer;

		&:hover {
			color: var(--_btn-hover-colour);
			background-color: var(--_btn-hover-bg-colour);
		}

		&--colour {

			&--secondary {
				--_btn-colour: var(--token-text-action);
				--_btn-background-colour: var(--token-surface-secondary);
				--_btn-hover-colour: var(--token-text-action);
				--_btn-hover-bg-colour: var(--colour-blue-100);
			}

			&--grey {
				--_btn-colour: var(--token-text-body);
				--_btn-background-colour: var(--token-surface-grey);
				--_btn-hover-colour: var(--token-text-body);
				--_btn-hover-bg-colour: var(--colour-grey-100);
			}
		}

		&--loading {
			transition: none;
			pointer-events: none;
			color: transparent !important;

			&:after {
				content: '';
				width: 18px;
				height: 18px;
				border: 2px solid rgba(0, 0, 0, 0.5);
				border-right-color: transparent !important;
				border-radius: 50%;
				display: inline-block;
				animation-duration: 0.75s;
				animation-iteration-count: infinite;
				animation-name: spinner;
				animation-timing-function: linear;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -9px;
				margin-top: -9px;
			}

			@keyframes spinner {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}

			&:hover {
				box-shadow: none;
			}
		}
	}
</style>
