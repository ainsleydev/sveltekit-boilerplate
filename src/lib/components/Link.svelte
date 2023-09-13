<script lang="ts">
	// import { page } from '$app/stores';
	//
	export let href = '';
	//
	// const isExternalURL = (url: string): boolean => {
	// 	if (url === '') {
	// 		return false;
	// 	}
	// 	return new URL(url).origin !== new URL($page.url).origin;
	// };
	//
	// console.log(isExternalURL(href));

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
<a {href} title="">
	<slot />
</a>
