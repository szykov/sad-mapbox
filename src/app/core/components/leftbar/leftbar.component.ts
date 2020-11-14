import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { IMenuLink } from 'src/app/interfaces';

@Component({
	selector: 'sad-leftbar',
	templateUrl: './leftbar.component.html',
	styleUrls: ['./leftbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftbarComponent {
	@Output() menuChange = new EventEmitter<number>();

	public selectedLink: IMenuLink = { value: 0, description: 'Menu1' };

	public menuOptions: IMenuLink[] = [
		{ value: 0, description: 'Load pins on map' },
		{ value: 1, description: 'Zoom in to specific pin' },
		{ value: 2, description: 'Change pins' },
		{ value: 3, description: 'Auto Zoom to center' }
	];

	constructor() {}

	public onSelect = (value: number): void => this.menuChange.emit(value);
}
