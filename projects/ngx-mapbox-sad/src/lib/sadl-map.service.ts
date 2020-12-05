import { Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';

import { FlyToOptions, LngLatBounds, LngLatLike, Marker, Map } from 'mapbox-gl';

import { ISadlGeoLocation } from '@ngx-mapbox-sad/lib/interfaces';
import { SadlMapOptionsModel } from '@ngx-mapbox-sad/lib/models';
import { SadlMarkerOptionsModel } from '@ngx-mapbox-sad/lib/models/marker-options.model';
import { SadlLayerOptionsModel } from './models/layer-options.model';

export const ACCESS_TOKEN = new InjectionToken('AccessToken');

@Injectable()
export class SadlMapService {
	private _map: Map | undefined;
	private markers: Marker[] = [];

	private set map(map: Map) {
		this._map = map;
	}
	private get map(): Map {
		if (!this._map) {
			throw new Error('Please setup the service before proceed');
		}

		return this._map;
	}

	constructor(@Inject(ACCESS_TOKEN) private readonly ACCESS_TOKEN: string) {}

	public setup(options: SadlMapOptionsModel): void {
		let mapboxOptions = options.toMapboxOptions();
		mapboxOptions.accessToken = this.ACCESS_TOKEN;

		this.map = new Map(mapboxOptions);
	}

	public addMarker(locaiton: ISadlGeoLocation, options?: SadlMarkerOptionsModel): void {
		let markerOptions = options?.toMarkerOptions() || {};
		let marker = new Marker(markerOptions);
		let location: LngLatLike = [locaiton.longitude, locaiton.latitude];
		marker.setLngLat(location);

		this.markers.push(marker);
		marker.addTo(this.map);
	}

	public removeAllMarkers(): void {
		this.markers.forEach((marker) => marker.remove());
		this.markers = [];
	}

	public flyTo(location: ISadlGeoLocation, zoom?: number): void {
		let flyToOptions: FlyToOptions = {
			center: [location.longitude, location.latitude],
			zoom: zoom
		};

		this.map.flyTo(flyToOptions);
	}

	public fitMarkerBounds(): void {
		let bounds = new LngLatBounds();
		this.markers.forEach((marker) => bounds.extend(marker.getLngLat()));

		this.map.fitBounds(bounds, { padding: 50 });
	}

	public addLayer(layer: SadlLayerOptionsModel): void {
		this.map.addLayer(layer.toLayer());
	}
}
