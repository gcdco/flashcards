import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ShowWordsComponent } from './words/show-words/show-words.component';
import { ExportComponent } from './export/export.component';
import { AddWordComponent } from './add-word/add-word.component';
import { CardComponent } from './words/show-words/card/card.component';
import { WordComponent } from './words/show-words/card/word/word.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ShowWordsComponent,
		ExportComponent,
		AddWordComponent,
		CardComponent,
		WordComponent
	],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
