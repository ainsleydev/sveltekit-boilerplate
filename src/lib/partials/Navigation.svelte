<script lang="ts">
	// TODO: Array of Navigational Items
	interface NavItem {
		link: string;
		title: string;
	}
</script>

<nav class="nav">
	<ul class="nav-list">
		<li class="nav-item">
			<a href="#home" class="nav-link">Home</a>
		</li>
		<li class="nav-item"><a href="#home" class="nav-link">LINK</a></li>
		<li class="nav-item"><a href="#home" class="nav-link">LINK</a></li>
		<li class="nav-item"><a href="#home" class="nav-link">LINK</a></li>
		<li class="nav-item"><a href="#home" class="nav-link">LINK</a></li>
		<li class="nav-item"><a href="#home" class="nav-link">LINK</a></li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		$self: &;

		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: yellow;
		padding: 0 $gap-width;

		&-link {
			color: red;
		}

		@include media-desk-down {
			opacity: 0;
			visibility: hidden;
			transition: opacity 700ms, visibility 700ms step-end;

			&-active {
				opacity: 1;
				visibility: visible;
				transition: opacity 700ms, visibility 700ms step-start;
			}
		}

		@include media-desk {
			position: relative;
			flex-direction: column;
			justify-content: flex-start;
			width: auto;
			height: auto;
			padding: 0;
			background-color: transparent;

			&-list {
				display: flex;
				align-items: center;
			}

			&-item {
				margin-left: 16px;
			}

			&-link {
				color: green;
			}
		}
	}
</style>
