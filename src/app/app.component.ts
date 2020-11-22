import { Component } from '@angular/core';

@Component({
	selector: 'sad-root',
	template: `
		<sad-layout>
			<router-outlet></router-outlet>
		</sad-layout>
	`
})
export class AppComponent {}
