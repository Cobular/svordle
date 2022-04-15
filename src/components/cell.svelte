<script lang="ts">
	import type { Status } from '../utils/types';
	import { current_word } from '../utils/wordle_logic';
	import { status } from '../utils/helpers';

	export let letter: string | undefined = undefined;
	export let index: number;
	export let submitted: boolean;
</script>

<div class={`cell_parent ${status(submitted, $current_word, letter, index)}`}>
	{#if letter !== undefined}
		<h3>{letter}</h3>
	{/if}
</div>

<style lang="scss">
	.cell_parent {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 40px;
		height: 40px;

		border: 1px solid white;
		border-radius: 1px;

		margin: 5px;

		h3 {
			background-color: unset;
			color: black;
		}

		&.none {
			background-color: darkgrey;
		}
		&.correct {
			background-color: #2b712b;
		}
		&.wrong_position {
			background-color: #71712b;
		}
		&.incorrect {
			background-color: #712b2b;
		}
	}
</style>
