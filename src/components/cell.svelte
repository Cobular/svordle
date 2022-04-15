<script lang="ts">
	import { CellStatus } from '../utils/types';
	import { current_word } from '../utils/wordle_logic';

	export let letter: string | undefined = undefined;
	export let index: number;
	export let submitted: boolean;

	function status(submitted: boolean): 'none' | 'correct' | 'wrong_position' | 'incorrect' {
		let _status: 'none' | 'correct' | 'wrong_position' | 'incorrect' = 'none';

		if (submitted) {
		if ($current_word.letters.includes(letter)) _status = 'wrong_position';
		else _status = 'incorrect';
		if ($current_word.letters[index] === letter) _status = 'correct';

		}

		return _status;
	}
</script>

<div
	class={`cell_parent ${status(submitted)}`}
>
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
			background-color: green;
		}
		&.wrong_position {
			background-color: yellow;
		}
		
		&.incorrect {
			background-color: red;
		}
	}
</style>
