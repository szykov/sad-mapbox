import { AnySourceData, GeoJSONSourceRaw, Layer, Source } from 'mapbox-gl';

import { LayerType } from '../enums';
import { ISadlGeoLocation, ISadlLayerOptions } from '../interfaces';

export class SadlLayerOptionsModel implements ISadlLayerOptions {
	public id!: string;
	public locations!: ISadlGeoLocation[];
	public type!: LayerType;

	constructor(options: ISadlLayerOptions) {
		Object.assign(this, options);
	}

	public toLayer(): Layer {
		let layer: Layer = {
			id: this.id,
			type: this.type,
			source: this.id,
			paint: {
				'circle-radius': 10,
				'circle-color': '#007cbf'
			}
		};
		return layer;
	}

	public toSource(): AnySourceData {
		switch (this.type) {
			case LayerType.Circle: {
				let source: GeoJSONSourceRaw = {
					type: 'geojson',
					data: {
						type: 'FeatureCollection',
						features: this.locations.map((location) => {
							return {
								type: 'Feature',
								geometry: {
									type: 'Point',
									coordinates: [location.longitude, location.latitude]
								},
								properties: {
									title: 'some'
								}
							};
						})
					}
				};
				return source;
			}

			default:
				throw new Error('Source type is not supported');
		}
	}
}
