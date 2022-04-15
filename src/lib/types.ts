export enum CellStatus {
	NONE = 'NONE',
	CORRECT = 'CORRECT',
	WRONG_POSITION = 'WRONG_POSITION'
}

export interface CurrentWord {
	word: string;
	letters: string[];
}

export interface GameStatus {
	current_row: 0 | 1 | 2 | 3 | 4 | 5;
	row0: RowDatum;
	row1: RowDatum;
	row2: RowDatum;
	row3: RowDatum;
	row4: RowDatum;
	row5: RowDatum;
}

export interface RowDatum {
	submitted: boolean;
	cell0?: string;
	cell1?: string;
	cell2?: string;
	cell3?: string;
	cell4?: string;
}

export type Status = 'none' | 'correct' | 'wrong_position' | 'incorrect';
