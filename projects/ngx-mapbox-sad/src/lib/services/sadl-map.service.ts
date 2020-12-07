import { Inject, Injectable, InjectionToken } from '@angular/core';

import { FlyToOptions, LngLatBounds, LngLatLike, Marker, Map, Layer } from 'mapbox-gl';

import { ISadlGeoLocation } from '@ngx-mapbox-sad/lib/interfaces';
import { SadlMapOptionsModel, SadlMarkerOptionsModel, SadlLayerOptionsModel } from '@ngx-mapbox-sad/lib/models';
import { Observable, Subject } from 'rxjs';

export const ACCESS_TOKEN = new InjectionToken('AccessToken');

// todo: split on multiple files
@Injectable()
export class SadlMapService {
	public changed$: Observable<void>;
	private changed = new Subject<void>();

	private _map: Map | undefined;

	private markers: Marker[] = [];
	private layers: Layer[] = [];

	private set map(map: Map) {
		this._map = map;
	}
	private get map(): Map {
		if (!this._map) {
			throw new Error('Please setup the service before proceed');
		}

		return this._map;
	}

	constructor(@Inject(ACCESS_TOKEN) private readonly ACCESS_TOKEN: string) {
		this.changed$ = this.changed.asObservable();
	}

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

	public addLayer(model: SadlLayerOptionsModel): void {
		let layer = model.toLayer();
		this.layers.push(layer);

		this.map.addSource(model.id, model.toSource());
		this.map.addLayer(layer);

		this.changed.next();
	}

	public removeLayer(id: string): void {
		let exists = this.layers.some((layer) => layer.id === id);
		if (!exists) {
			throw new Error('Layer not found');
		}

		this.map.removeLayer(id);
		this.map.removeSource(id);

		this.changed.next();
	}
}
