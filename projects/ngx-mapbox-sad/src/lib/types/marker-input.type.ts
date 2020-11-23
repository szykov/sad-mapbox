import { ISadlGeoLocation, ISadlMarkerOptions } from '../interfaces';

export type SadlMarkerInput = {
	locations: ISadlGeoLocation[];
	options?: ISadlMarkerOptions;
};
