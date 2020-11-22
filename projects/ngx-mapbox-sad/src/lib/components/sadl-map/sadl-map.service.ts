import { Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';

import * as MapboxGl from 'mapbox-gl';
import { ISadlFlyToInput, ISadlGeoLocation, ISadlMapOptions, ISadlMarkerOptions } from '@ngx-mapbox-sad/lib/interfaces';

export const ACCESS_TOKEN = new InjectionToken('AccessToken');

@Injectable()
export class SadlMapService {
	private _map: MapboxGl.Map | undefined;
	private markers: MapboxGl.Marker[] = [];

	private set map(map: MapboxGl.Map) {
		this._map = map;
	}
	private get map(): MapboxGl.Map {
		if (!this._map) {
			throw new Error('Please setup the service before proceed');
		}

		return this._map;
	}

	constructor(@Inject(ACCESS_TOKEN) private readonly ACCESS_TOKEN: string) {}

	public setup(options: ISadlMapOptions): void {
		let mapboxOptions = { ...options } as MapboxGl.MapboxOptions;
		mapboxOptions.accessToken = this.ACCESS_TOKEN;
		this.map = new MapboxGl.Map(mapboxOptions);
	}

	public addMarker(locaiton: ISadlGeoLocation, options?: ISadlMarkerOptions): void {
		let markerOptions = ({ ...options } as MapboxGl.MarkerOptions) || {};
		let marker = new MapboxGl.Marker(markerOptions);
		let location: MapboxGl.LngLatLike = [locaiton.longitude, locaiton.latitude];
		marker.setLngLat(location);

		this.markers.push(marker);
		marker.addTo(this.map);
	}

	public removeAllMarkers(): void {
		this.markers.forEach((marker) => marker.remove());
		this.markers = [];
	}

	public flyTo(options: ISadlFlyToInput): void {
		let flyToOptions: MapboxGl.FlyToOptions = { center: [options.center.longitude, options.center.latitude] };
		this.map.flyTo(flyToOptions);
	}
}
