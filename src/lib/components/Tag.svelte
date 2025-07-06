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
	@use '../scss/abstracts' as a;

	.tag {
		$self: &;

		--_tag-padding: #{a.$size-4} #{a.$size-12};
		--_tag-colour: var(--token-text-negative, #{a.$text-negative});
		--_tag-background-colour: var(--token-surface-primary, #{a.$surface-primary});
		--_tag-border-radius: #{a.$border-radius-6};

		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-right: 4px;
		background-color: var(--_tag-background-colour);
		color: var(--_tag-colour);
		padding: var(--_tag-padding);
		font-size: 0.9rem;
		border-radius: var(--_tag-border-radius);
		user-select: none;
		font-weight: 500;
		white-space: nowrap;

		&:last-child {
			margin: 0;
		}
	}
</style>
