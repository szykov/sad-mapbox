import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { SadlLayerInput } from '@ngx-mapbox-sad/lib/types';

@Component({
	selector: 'sadl-layer',
	template: '',
	styleUrls: ['./sadl-layer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SadlLayerComponent implements OnInit {
	@Input() options: SadlLayerInput | undefined;

	constructor() {}

	ngOnInit(): void {}
}
