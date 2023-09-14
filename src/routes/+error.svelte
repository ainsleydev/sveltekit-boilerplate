<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error ? $page.error.message : 'Unexpected error occurred'}</h1>
