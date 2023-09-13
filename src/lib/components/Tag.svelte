<!--
	@component

	A small count or labelling component, such as badges, pills or tags.

	@example
	```svelte
	<Tag>
		Content
	</Tag>
    ```
-->
<div class="tag">
	<slot />
</div>

<style lang="scss">
	.tag {
		position: relative;
		display: inline-flex;
		margin-right: 4px;
		padding: 2px 10px;
		background-color: var(--colour-foreground);
		color: var(--colour-background);
		font-size: 0.9rem;
		border-radius: 4px;
		user-select: none;
		font-weight: 500;
		white-space: nowrap;

		&:last-child {
			margin: 0;
		}
	}
</style>
