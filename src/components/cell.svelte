<script lang="ts">
	import { CellStatus } from '../utils/types';
	import { current_word } from '../utils/wordle_logic';

	export let letter: string = '';
	export let index: number;
	export let submitted: boolean;

	let status: CellStatus = CellStatus.NONE;

	current_word.subscribe((current_word) => {
		if (submitted) {
			if (current_word.letters.includes(letter)) status = CellStatus.WRONG_POSITION;
			if (current_word.letters[index] === letter) status = CellStatus.CORRECT;
		}
	});
</script>

<div
	class="cell_parent"
	class:none={status === CellStatus.NONE}
	class:correct={status === CellStatus.CORRECT}
	class:wrong_position={status === CellStatus.WRONG_POSITION}
>
	<h3>{letter}</h3>
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
			background-color: lightgreen;
		}
		&.wrong_position {
			background-color: lightyellow;
		}
	}
</style>
