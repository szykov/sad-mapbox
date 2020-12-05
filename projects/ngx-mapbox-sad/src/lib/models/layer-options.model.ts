import { Layer } from 'mapbox-gl';
import { ISadlGeoLocation, ISadlLayerOptions } from '../interfaces';

export class SadlLayerOptionsModel implements ISadlLayerOptions {
	public id!: string;
	public locations!: ISadlGeoLocation[];

	constructor(options: ISadlLayerOptions) {
		Object.assign(this, options);
	}

	public toLayer(): Layer {
		let layer: Layer = {
			id: this.id
		};
		return layer;
	}
}
