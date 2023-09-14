<script lang="ts">
	export let href = '';
	export let loading = false;
	export let label: string;
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
<div class="btn-wrapper">
	{#if href}
		<a
			{href}
			class="btn"
			role="button"
			aria-label={label}
			class:btn-loading={loading}
			{...$$restProps}
		>
			<slot />
		</a>
	{:else}
		<button class="btn" aria-label={label} class:btn-loading={loading} {...$$restProps}>
			<slot />
		</button>
	{/if}
</div>

<style lang="scss">
	.btn {
		position: relative;
		display: inline-flex;
		justify-content: center;
		color: var(--colour, var(--colour-background));
		background-color: (--background, var(--colour-foreground));
		padding: 14px 26px;
		outline: none;
		font-size: 1rem;
		font-weight: bold;
		height: auto;
		border-radius: 4px;

		&:hover {
			background: red;
		}

		&:active {
			background: green;
		}

		&-loading {
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
