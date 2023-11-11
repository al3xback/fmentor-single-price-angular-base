import { Component } from '@angular/core';

@Component({
	selector: 'app-card-monthly-subscription',
	templateUrl: './card-monthly-subscription.component.html',
	styleUrls: ['./card-monthly-subscription.component.scss']
})
export class CardMonthlySubscriptionComponent {
	title = 'Monthly Subscription';
	description = 'Full access for less than $1 a day';
	price = 29;
}
