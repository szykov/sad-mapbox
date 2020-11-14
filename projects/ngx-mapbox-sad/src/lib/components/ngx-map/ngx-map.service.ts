import { Inject, Optional } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';

import { MapboxOptions } from 'mapbox-gl';
import * as MapboxGl from 'mapbox-gl';

export const ACCESS_TOKEN = new InjectionToken('AccessToken');

@Injectable()
export class NgxMapService {
	public mapInstance: MapboxGl.Map | undefined;

	constructor(@Inject(ACCESS_TOKEN) private readonly ACCESS_TOKEN: string) {}

	public setup(options: MapboxOptions): void {
		options.accessToken = this.ACCESS_TOKEN;
		this.mapInstance = new MapboxGl.Map(options);
	}
}
