import { Word } from './word.model';

export class Card {
	public word: Word;
	public exported: Boolean;
	public selected: Boolean;
	public id: number;

	constructor(
		word: Word = new Word(),
		exported: Boolean = true,
		id: number = Math.random() * 10000 + 1
	) {
		this.selected = false;
	}
}
