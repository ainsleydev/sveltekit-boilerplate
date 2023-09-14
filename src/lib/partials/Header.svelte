<script lang="ts">
	let scrolled = false;

	// Add a scrolled class to the header after a certain amount.
	const scroll = (e: Event) => {
		const window = e.currentTarget as Window;
		window.scrollY > 80 ? (scrolled = true) : (scrolled = false);
	};
</script>

<svelte:window on:scroll={scroll} />

<!--
	@component

	Display the header of the website which renders menus, navigation & logo elements.
	TODO: Headers are very unique to each website, and therefore only resets have been applied.

-->
<header class="header" class:header-scrolled={scrolled}>
	<div class="header-container">
		<figure class="header-logo">
			<figcaption>Logo</figcaption>
		</figure>
		<input class="hamburger-checkbox" type="checkbox" id="hamburger-check" />
		<div class="hamburger">
			<label for="hamburger-check" class="hamburger-box" aria-label="Open Navigation">
				<span class="hamburger-inner" />
			</label>
		</div>
	</div>
</header>

<style lang="scss">
	.header {
		$self: &;

		position: fixed;
		top: 0;
		left: 0;
		height: 70px;
		width: 100vw;
		padding: 0 15px;
		background-color: var(--colour-foreground);
		color: var(--colour-background);
		z-index: 99999;
		transition: background-color 300ms ease, box-shadow 300ms ease;
		will-change: background-color, box-shadow;

		&-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}

		&-logo {
			z-index: 999999;
		}

		&-scrolled {
			background-color: var(--colour-foreground);
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.23);
		}
	}
</style>
