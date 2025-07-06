<script lang="ts"></script>

<div class="modal">
	Modal
</div>

<style lang="scss">
	@use '../scss/abstracts' as a;

	.modal {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 99999999999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
