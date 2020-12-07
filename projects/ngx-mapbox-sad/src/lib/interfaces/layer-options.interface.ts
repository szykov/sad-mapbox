import { LayerType } from '../enums';
import { ISadlGeoLocation } from './geo-location.interface';

export interface ISadlLayerOptions {
	id: string;
	type: LayerType;
	locations: ISadlGeoLocation[];
}
