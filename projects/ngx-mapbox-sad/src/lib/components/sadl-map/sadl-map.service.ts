import { Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';

import * as MapboxGl from 'mapbox-gl';
import { SadlMapOptions } from '@ngx-mapbox-sad/lib/interfaces';

export const ACCESS_TOKEN = new InjectionToken('AccessToken');

@Injectable()
export class SadlMapService {
	public mapInstance: MapboxGl.Map | undefined;

	constructor(@Inject(ACCESS_TOKEN) private readonly ACCESS_TOKEN: string) {}

	public setup(options: SadlMapOptions): void {
		let mapboxOptions = { ...options } as MapboxGl.MapboxOptions;
		mapboxOptions.accessToken = this.ACCESS_TOKEN;
		this.mapInstance = new MapboxGl.Map(mapboxOptions);
	}
}
