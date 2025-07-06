<script lang="ts">
	let scrolled = false;

	const scroll = (e: Event) => {
		const window = e.currentTarget as Window;
		window.scrollY > 80 ? (scrolled = true) : (scrolled = false);
	};
</script>

<svelte:window on:scroll={scroll} />

<!--
	@component

	Display the header of the website which renders menus, navigation & logo elements.
-->
<header class="header" class:header--scrolled={scrolled}>
	<div class="header__container">
		<figure class="header__logo">
			<figcaption>Logo</figcaption>
		</figure>
		<input class="header__hamburger-checkbox" type="checkbox" id="hamburger-check" />
		<div class="header__hamburger">
			<label for="hamburger-check" class="header__hamburger-box" aria-label="Open Navigation">
				<span class="header__hamburger-inner"></span>
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
		background-color: var(--token-surface-dark);
		color: var(--colour-background);
		z-index: 99999;
		transition: background-color 300ms ease, box-shadow 300ms ease;
		will-change: background-color, box-shadow;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}

		&__logo {
			z-index: 999999;
			color: var(--token-text-negative);
		}

		&__hamburger-checkbox {
			display: none;
		}

		&__hamburger {
			display: flex;
		}

		&__hamburger-box {
			cursor: pointer;
		}

		&__hamburger-inner {
			display: block;
			width: 25px;
			height: 2px;
			background-color: currentColor;
		}

		&--scrolled {
			background-color: var(--colour-foreground);
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.23);
		}
	}
</style>
