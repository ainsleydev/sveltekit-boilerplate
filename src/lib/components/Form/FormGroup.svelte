<script lang="ts">
	import { setContext } from 'svelte';
	import { generateRandomString } from '$utils/strings';

	export let label = '';
	export let error = '';
	export let required = false;
	export let id = '';
	export let disabled = false;

	const computedId = id || `form-group-${generateRandomString(10)}`;

	setContext('form-group-id', computedId);
</script>

<fieldset class="form-group" class:form-group--disabled={disabled}>
	{#if label}
		<label for={computedId} class="form-group__label">
			{label}
			{#if required}
				<span class="form-required">*</span>
			{/if}
		</label>
	{/if}
	<slot />
	{#if error}
		<div class="form-group__error" role="alert">
			{error}
		</div>
	{/if}
</fieldset>

<style lang="scss">
	.form-group {
		$self: &;

		margin-bottom: 1rem;

		&--disabled {
			opacity: 0.6;
		}

		&__label {
			display: block;
			margin-bottom: 0.5rem;
			font-weight: 500;
			color: var(--token-text-body);
			font-size: 0.875rem;
			line-height: 1.25;
		}
	}
</style>
