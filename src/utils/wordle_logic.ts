import { writable, type Writable } from 'svelte/store';
import type { CurrentWord, RowData, RowDatum } from './types';
import { words_set } from './words';

// get random item from a Set
function getRandomItem(set: Set<string>): string {
	const items = Array.from(set);
	return items[Math.floor(Math.random() * items.length)];
}

function currentWordFactory(word: string): CurrentWord {
	if (word.length !== 5) throw new Error('You buffoon, a wordle word must be 5 letters long!');

	const letters = word.split('');
	return {
		word,
		letters
	};
}

export function gameStateFactory(): RowData {
  const submitted = false;
	const row0: RowDatum = {submitted};
	const row1: RowDatum = {submitted};
	const row2: RowDatum = {submitted};
	const row3: RowDatum = {submitted};
	const row4: RowDatum = {submitted};
	const row5: RowDatum = {submitted};
	return {
		row0,
		row1,
		row2,
		row3,
		row4,
		row5
	};
}

// const _current_word: CurrentWord = currentWordFactory(getRandomItem(words_set));
const _current_word: CurrentWord = currentWordFactory("AAAAA");

export const current_word: Writable<CurrentWord> = writable(_current_word);

export const game_status: Writable<RowData> = writable(gameStateFactory());
