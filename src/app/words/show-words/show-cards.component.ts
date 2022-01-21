import { Component, OnInit } from '@angular/core';
//import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-show-cards',
	templateUrl: './show-cards.component.html',
	styleUrls: [ './show-cards.component.css' ]
})
export class ShowCardsComponent implements OnInit {
	newServerContent = '';

	constructor() {}

	ngOnInit(): void {}
}
