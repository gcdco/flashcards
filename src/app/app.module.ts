import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ShowCardsComponent } from './words/show-words/show-cards.component';
import { ExportComponent } from './export/export.component';
import { AddWordComponent } from './add-word/add-word.component';
import { CardComponent } from './words/show-words/card/card.component';
import { WordComponent } from './words/show-words/card/word/word.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ShowCardsComponent,
		ExportComponent,
		AddWordComponent,
		CardComponent,
		WordComponent
	],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
