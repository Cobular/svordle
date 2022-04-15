<script lang="ts">
	import Icon from '../components/icon.svelte';
	import Row from '../components/row.svelte';
	import { game_status, current_word } from '../utils/wordle_logic';
	import svelte from '$lib/svelte.svg';
	import type { RowDatum } from 'src/utils/types';

	function writeToNextCell(row: RowDatum, letter: string): RowDatum | false {
		// Go from the start, write to the first undefined if one is found
		for (let i = 0; i < 6; i++) {
			const element = row[`cell${i}`];
			if (element === undefined) {
				row[`cell${i}`] = letter.toUpperCase();
				return row;
			}
		}
		return false;
	}

	function removeCurrentCell(row: RowDatum): RowDatum | false {
		// Go from the end, write undefined to the first element that's not undefined if one is found
		for (let i = 4; i >= 0; i--) {
			const element = row[`cell${i}`];
			if (element !== undefined) {
				row[`cell${i}`] = undefined;
				return row;
			}
		}
		return false;
	}

	function handleKeydown(event: KeyboardEvent) {
		// Handle a keystroke
		let newRowStatus = undefined;
		switch (event.key) {
			// If it's backspace, process it
			case 'Backspace':
				newRowStatus = removeCurrentCell($game_status[`row${$game_status.current_row}`]);
				if (newRowStatus !== false) {
					$game_status[`row${$game_status.current_row}`] = newRowStatus;
				}
				break;

			case 'a' || 'A':
			case 'b' || 'B':
			case 'c' || 'C':
			case 'd' || 'D':
			case 'e' || 'E':
			case 'f' || 'F':
			case 'g' || 'G':
			case 'h' || 'H':
			case 'i' || 'I':
			case 'j' || 'J':
			case 'k' || 'K':
			case 'l' || 'L':
			case 'm' || 'M':
			case 'n' || 'N':
			case 'o' || 'O':
			case 'p' || 'P':
			case 'q' || 'Q':
			case 'r' || 'R':
			case 's' || 'S':
			case 't' || 'T':
			case 'u' || 'U':
			case 'v' || 'V':
			case 'w' || 'W':
			case 'x' || 'X':
			case 'y' || 'Y':
			case 'z' || 'Z':
				newRowStatus = writeToNextCell($game_status[`row${$game_status.current_row}`], event.key);
				if (newRowStatus !== false) {
					$game_status[`row${$game_status.current_row}`] = newRowStatus;
				}
				break;

			case 'Enter':
				// If the current row is complete, move to the next one
				if ($game_status[`row${$game_status.current_row}`].cell4 !== undefined && $game_status.current_row !== 4) {
					console.log('incrementing');
					$game_status[`row${$game_status.current_row}`].submitted = true;
					$game_status["current_row"] = $game_status.current_row + 1;
					// game_status.update((this_game_status) => {
					// 	this_game_status.current_row += 1;
					// 	return this_game_status;
					// });
				}
				break;
		}
	}
</script>

<div id="index">
	<h1><Icon image_path={svelte} image_alt="Svelte Logo" />Svordle</h1>
	<Row cell_contents={$game_status.row0} />
	<Row cell_contents={$game_status.row1} />
	<Row cell_contents={$game_status.row2} />
	<Row cell_contents={$game_status.row3} />
	<Row cell_contents={$game_status.row4} />
	<Row cell_contents={$game_status.row5} />
</div>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<style lang="scss">
	// Center the index id with flexbox
	#index {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	// Globally add our fonts
	:global(*) {
		font-family: 'Roboto', sans-serif;
		background-color: rgb(29, 33, 33);
		color: whitesmoke;
	}
</style>
