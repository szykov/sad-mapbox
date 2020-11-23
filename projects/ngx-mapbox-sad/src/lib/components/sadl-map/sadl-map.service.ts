import { Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';

import * as MapboxGl from 'mapbox-gl';
import { ISadlGeoLocation, ISadlMapOptions, ISadlMarkerOptions } from '@ngx-mapbox-sad/lib/interfaces';

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

	public flyTo(location: ISadlGeoLocation, zoom?: number): void {
		let flyToOptions: MapboxGl.FlyToOptions = {
			center: [location.longitude, location.latitude],
			zoom: zoom
		};

		this.map.flyTo(flyToOptions);
	}

	public fitMarkerBounds(): void {
		let bounds = new MapboxGl.LngLatBounds();
		this.markers.forEach((marker) => bounds.extend(marker.getLngLat()));

		this.map.fitBounds(bounds, { padding: 50 });
	}
}
