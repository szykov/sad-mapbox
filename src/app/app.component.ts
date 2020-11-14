import { Component } from '@angular/core';

@Component({
	selector: 'sad-root',
	template: `
		<sad-root-layout>
			<router-outlet></router-outlet>
		</sad-root-layout>
	`
})
export class AppComponent {}
