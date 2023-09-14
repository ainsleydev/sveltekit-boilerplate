<script lang="ts">
	interface TableItem {
		value: string;
		text: string;
		align?: 'start' | 'center' | 'end';
	}

	export let headers: TableItem[] = [];
	export let items: TableItem[] = [];

	export let alternatingRows = true;
</script>

<table {...$$restProps}>
	<thead>
		<tr>
			{#each headers as header (header.value)}
				<th class:center={header.align === 'center'} class:end={header.align === 'end'}>
					{header.text}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr class:alternating={alternatingRows}>
				{#each headers as header (header.value)}
					<td class:center={header.align === 'center'} class:end={header.align === 'end'}>
						{item.text}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	:global(table) {
		border-collapse: separate;
		border-spacing: 0;
		display: block;
		margin-bottom: 1em;
		overflow-x: auto;

		th {
			padding: 0.5em 1em;
			text-align: start;

			&.center {
				text-align: center;
			}

			&.end {
				text-align: end;
			}
		}

		tr {
			&.alternating {
				&:nth-child(even) {
					background: color.adjust(vars.$main, $alpha: -0.97);
				}
			}

			&:first-child {
				> td:first-child {
					border-top-left-radius: 4px;
				}

				> td:last-child {
					border-top-right-radius: vars.$table-radius;
				}
			}

			&:last-child {
				> td {
					border-bottom-width: 1px;
				}

				> td:first-child {
					border-bottom-left-radius: vars.$table-radius;
				}

				> td:last-child {
					border-bottom-right-radius: vars.$table-radius;
				}
			}
		}

		td {
			border: 0 solid color.adjust(vars.$main, $alpha: -0.75);
			border-width: 1px 0 0 1px;
			line-height: 1.3em;
			padding: 1em;
			text-align: start;

			&.center {
				text-align: center;
			}

			&.end {
				text-align: end;
			}

			&:last-child {
				border-right-width: 1px;
			}
		}
	}
</style>
