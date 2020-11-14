import { Component } from '@angular/core';

@Component({
	selector: 'sad-root-layout',
	templateUrl: './root-layout.component.html',
	styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent {
	public onSelectMenu(value: number): void {
		console.log(value);
	}
}
