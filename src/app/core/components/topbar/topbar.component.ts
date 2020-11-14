import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'sad-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
	public title = 'MapBox Wrapper';

	constructor() {}
}
