import { Component, OnInit } from '@angular/core';

import { SadlMapInput } from 'projects/ngx-mapbox-sad/src/public-api';
import { MAPBOX_STYLE } from './mapbox-style';

@Component({
	selector: 'sad-mapbox',
	templateUrl: './mapbox.component.html'
})
export class MapboxComponent implements OnInit {
	public options: SadlMapInput = {
		style: MAPBOX_STYLE,
		center: [-74.5, 40],
		zoom: 9
	};

	constructor() {}

	ngOnInit(): void {}
}
