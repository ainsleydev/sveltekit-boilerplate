<script lang="ts">
	import { error } from '@sveltejs/kit';

	export let url = '';
	// export let title = '';

	// const isExternalURL = (url) => new URL(url).origin !== location.origin;
	// const test = false;

	// if (title === '') {
	//     throw error(404, {
	//         message: 'ffNot found'
	//     });
	// }
</script>

<!--
	@component

	Display a horizontal section that divides page blocks.

	@example
	```svelte
	<Link size="small" padding>
		Content
	</Link>

	<Link size="medium" margin>
		Content
	</Link>
    ```
-->
<a href={url} title="">
	<slot />
</a>
