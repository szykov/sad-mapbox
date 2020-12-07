import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromState from '@app/reducers';
import { CompaniesActions } from '@app/actions';

import { MAPBOX_STYLE } from './mapbox-style';
import { ISadlGeoLocation, SadlMapInput } from '@ngx-mapbox-sad/public-api';
import { MenuAction } from '@app/shared/common';
import { LayerType } from '@ngx-mapbox-sad/lib/enums';
import { ICompany, IRecord } from '@app/interfaces';

const USA_LOCATION: ISadlGeoLocation = { longitude: -100, latitude: 37 };

@Component({
	selector: 'sad-mapbox',
	templateUrl: './mapbox.component.html'
})
export class MapboxComponent implements OnInit, OnDestroy {
	public mapOptions: SadlMapInput = {
		style: MAPBOX_STYLE,
		center: USA_LOCATION,
		zoom: 3
	};
	public companies: ICompany[] = [];
	public layerType = LayerType;

	private unsubscribe$: Subject<void> = new Subject();

	constructor(private store: Store<fromState.State>) {}

	ngOnInit(): void {
		this.store.dispatch(CompaniesActions.loadCompanies());

		this.store
			.select(fromState.getCompanies)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((companies) => (this.companies = companies || []));

		this.store
			.select(fromState.getMenu)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((menu) => this.initAction(menu?.selected));
	}

	// todo: move to store effects
	private initAction(action: MenuAction | null | undefined) {
		switch (action) {
			case MenuAction.ZoomToRandomPin: {
				if (!this.companies.length) {
					break;
				}

				let records = this.companies.map((company) => company.records);
				let locations = this.convertToGeoLocation(records.reduce((prev, cur) => prev.concat(cur), []));
				let target = locations[Math.floor(Math.random() * locations.length)];
				this.mapOptions = { ...this.mapOptions, center: target, zoom: 15 };
				break;
			}

			case MenuAction.ZoomToCenter:
				this.mapOptions = { ...this.mapOptions, center: USA_LOCATION, zoom: 3 };
				break;

			case MenuAction.ZoomToMarkers:
				this.mapOptions = { ...this.mapOptions, center: null };
				break;

			default:
				break;
		}
	}

	public convertToGeoLocation(records: IRecord[]): ISadlGeoLocation[] {
		return records.map((record) => ({
			longitude: Number(record.geocode.Longitude),
			latitude: Number(record.geocode.Latitude)
		}));
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
