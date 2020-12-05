import { ISadlMapOptions } from '../interfaces';

import { MapboxOptions, Style } from 'mapbox-gl';

export class SadlMapOptionsModel implements ISadlMapOptions {
	public container!: string | HTMLElement;
	public style!: Style | string;
	public center?: [number, number];
	public zoom?: number;

	constructor(options: ISadlMapOptions) {
		Object.assign(this, options);
	}

	toMapboxOptions(): MapboxOptions {
		let options: MapboxOptions = {
			container: this.container,
			style: this.style,
			center: this.center,
			zoom: this.zoom
		};
		return options;
	}
}
