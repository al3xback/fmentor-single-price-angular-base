import { Component } from '@angular/core';

@Component({
	selector: 'app-card-why-us',
	templateUrl: './card-why-us.component.html',
	styleUrls: ['./card-why-us.component.scss']
})
export class CardWhyUsComponent {
	title = 'Why Us';
	benefits = [
		'Tutorials by industry experts',
		'Peer & expert code review',
		'Coding exercises',
		'Access to our GitHub repos',
		'Community forum',
		'Flashcard decks',
		'New videos every week'
	];
}
