<script lang="ts">
	import { getContext } from 'svelte';
	import type { HTMLInputTypeAttribute, FullAutoFill } from 'svelte/elements';

	const id = getContext<string>('form-group-id');

	export let value = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let placeholder = '';
	export let autocomplete: FullAutoFill | undefined | null = undefined;
	export let required = false;
	export let disabled = false;
	export let error = '';
</script>

<input
	{id}
	{type}
	{placeholder}
	bind:value
	class="form-input {error ? 'form-input--error' : ''}"
	{required}
	{disabled}
	{autocomplete}
	aria-invalid={error ? 'true' : 'false'}
	aria-describedby={error ? `${id}-error` : null}
/>

<style lang="scss">
	.form-input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;

		&:focus {
			outline: none;
			border-color: var(--color-primary, #0070f3);
		}

		&--error {
			border-color: #e00;
		}
	}
</style>
