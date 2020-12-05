import { ISadlMarkerOptions } from '../interfaces';

import { MarkerOptions } from 'mapbox-gl';

export class SadlMarkerOptionsModel implements ISadlMarkerOptions {
	public draggable?: boolean;

	constructor(options: ISadlMarkerOptions) {
		Object.assign(this, options);
	}

	toMarkerOptions(): MarkerOptions {
		let options: MarkerOptions = {
			draggable: this.draggable
		};
		return options;
	}
}
