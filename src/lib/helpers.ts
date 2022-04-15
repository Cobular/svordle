import type { CurrentWord, GameStatus, RowDatum, Status } from './types';

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

export function updateStoreFromKey(event: KeyboardEvent, game_status: GameStatus): GameStatus {
	const row_name = `row${game_status.current_row}`;

	// Handle a keystroke
	let newRowStatus = undefined;
	switch (event.key) {
		// If it's backspace, process it
		case 'Backspace':
			newRowStatus = removeCurrentCell(game_status[row_name]);
			if (newRowStatus !== false) {
				game_status[row_name] = newRowStatus;
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
			newRowStatus = writeToNextCell(game_status[row_name], event.key);
			if (newRowStatus !== false) {
				game_status[row_name] = newRowStatus;
			}
			break;

		case 'Enter':
			// If the current row is complete, move to the next one
			if (game_status[row_name].cell4 !== undefined && game_status.current_row !== 4) {
				console.log('incrementing');
				game_status[row_name].submitted = true;
				game_status.current_row++;
			}
			break;
	}

	return game_status;
}

export function status(
	submitted: boolean,
	current_word: CurrentWord,
	letter: string,
	index: number
): Status {
	let _status: Status = 'none';

	if (submitted) {
		if (current_word.letters.includes(letter)) _status = 'wrong_position';
		else _status = 'incorrect';
		if (current_word.letters[index] === letter) _status = 'correct';
	}

	return _status;
}
