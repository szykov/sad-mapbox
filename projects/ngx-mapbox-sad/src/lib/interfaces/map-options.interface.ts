export interface ISadlMapOptions {
	container: string | HTMLElement;
	style: mapboxgl.Style | string;
	center?: [number, number];
	zoom?: number;
}
