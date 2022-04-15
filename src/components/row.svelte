<script lang="ts">
	import type { RowDatum } from '../utils/types';
	import Cell from './cell.svelte';

	export let cell_contents: RowDatum;
</script>

<div class="row">
	<Cell index={0} letter={cell_contents.cell0} submitted={cell_contents.submitted} />
  <Cell index={1} letter={cell_contents.cell1} submitted={cell_contents.submitted} />
  <Cell index={2} letter={cell_contents.cell2} submitted={cell_contents.submitted} />
  <Cell index={3} letter={cell_contents.cell3} submitted={cell_contents.submitted} />
  <Cell index={4} letter={cell_contents.cell4} submitted={cell_contents.submitted} />
</div>

<style lang="scss">
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: fit-content;

    & > * {
      width: 40px;
      height: 40px;
    }
  }
</style>
