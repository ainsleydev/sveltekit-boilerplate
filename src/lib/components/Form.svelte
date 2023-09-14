<script lang="ts">
</script>

<!--
	@component

	Display layouts for forms with a wide variety of inputs.
	TODO: Forms are very unique to each website, and therefore only resets have been applied.

	@example
	```svelte

    ```
-->
<form class="form">
	<!-- Name (Example) -->
	<fieldset class="form-group">
		<input class="form-input" type="text" name="name" id="name" />
		<label class="form-label" for="name"> Label for name </label>
	</fieldset>
</form>

<style lang="scss">
	.form {
		position: relative;
		display: block;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px white inset !important;
	}

	::placeholder {
		// Chrome, Firefox, Opera, Safari 10.1+
		color: var(--colour-copy);
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		// Internet Explorer 10-11
		color: var(--colour-copy);
	}

	::-ms-input-placeholder {
		// Microsoft Edge
		color: var(--colour-copy);
	}
</style>
