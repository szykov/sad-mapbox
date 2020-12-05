import { ISadlGeoLocation } from '../interfaces';

export type SadlMapInput = {
	style: mapboxgl.Style | string;
	center?: ISadlGeoLocation | null;
	zoom?: number;
};
