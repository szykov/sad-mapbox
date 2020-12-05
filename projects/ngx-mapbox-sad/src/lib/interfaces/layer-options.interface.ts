import { ISadlGeoLocation } from './geo-location.interface';

export interface ISadlLayerOptions {
	id: string;
	locations: ISadlGeoLocation[];
}
