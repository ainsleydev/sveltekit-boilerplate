<script lang="ts">
    import { page } from '$app/state';

	export let separator = '/';

	let crumbs: Array<{
		label: string;
		href: string;
		active?: boolean;
	}> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = page.url.pathname.split('/').filter((t) => t !== '');

		// Create { label, href, active } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return {
				label: t,
				href: tokenPath,
				active: page.url.pathname.split('/').pop() === tokenPath.replace('/', ''),
			};
		});

		// Add a way to get home too.
		crumbs.unshift({ label: 'Home', href: '/', active: false });
	}
</script>

<!--
	@component

	Outputs the page structure with the current pages location within a hierarchy.

	@example
	```svelte
	<Breadcrumbs></Breadcrumbs>

	<Breadcrumbs separator="|"></Breadcrumbs>
    ```
-->
<nav class="breadcrumbs" aria-label="breadcrumb">
	<ol class="breadcrumbs__list">
		{#each crumbs as c, i}
			<li
				class="breadcrumbs__item"
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<a
					class="breadcrumbs__link"
					class:breadcrumbs__link--active={c.active}
					href={c.href}
					itemprop="item"
				>
					<span itemprop="name">{c.label}</span>
					<span class="breadcrumbs__separator">{separator}</span>
				</a>
				<meta itemprop="position" content={(i + 1).toString()} />
			</li>
		{/each}
	</ol>
</nav>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.breadcrumbs {
		position: relative;
		overflow: clip;

		::-webkit-scrollbar {
			display: none;
		}

		&__list {
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			margin: 0;
			padding: 0;
			overflow-x: scroll;
		}

		&__item {
			display: flex;
			align-items: center;
			padding: 6px 0;

			&:first-child {
				margin-left: 0;
			}

			&:last-child .breadcrumbs__separator {
				display: none;
			}
		}

		&__link {
			white-space: nowrap;
			font-size: 1rem;
			font-weight: 500;

			&--active {
				background: green;
				// Add active styling here if needed
			}
		}

		&__separator {
			display: inline-block;
			color: var(--colour-primary);
			margin-left: 10px;
			margin-right: 10px;
		}

		@include a.mq(tab) {
			&__item {
				padding: 0;
			}

			&__link {
				max-width: 250px;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>
