import { ISadlGeoLocation, ISadlMarkerOptions } from '.';

export interface ISadlMarkerInput {
	locations: ISadlGeoLocation[];
	options?: ISadlMarkerOptions;
}
