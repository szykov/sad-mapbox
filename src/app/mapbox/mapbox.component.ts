import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromState from '@app/reducers';
import { CompaniesActions } from '@app/actions';

import { MAPBOX_STYLE } from './mapbox-style';
import { ISadlGeoLocation, SadlMapInput, SadlMarkerInput } from '@ngx-mapbox-sad/public-api';
import { MenuAction } from '@app/shared/common';

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
	public markerOptions: SadlMarkerInput | null = null;

	private unsubscribe$: Subject<void> = new Subject();

	constructor(private store: Store<fromState.State>, private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.store.dispatch(CompaniesActions.loadCompanies());

		this.store
			.select(fromState.getCompany)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((company) => {
				let locations: ISadlGeoLocation[] | undefined = company?.records.map((record) => ({
					longitude: Number(record.geocode.Longitude),
					latitude: Number(record.geocode.Latitude)
				}));
				this.markerOptions = locations ? { locations: locations } : null;
				this.cdr.detectChanges();
			});

		this.store
			.select(fromState.getSelectedMenuAction)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((action) => this.initAction(action));
	}

	// todo: move to store effects
	private initAction(action: MenuAction | null) {
		switch (action) {
			case MenuAction.ZoomToCenter:
				this.mapOptions = { ...this.mapOptions, center: USA_LOCATION, zoom: 3 };
				break;

			case MenuAction.ZoomToRandomPin: {
				if (!this.markerOptions) {
					break;
				}

				let locations = this.markerOptions.locations;
				let target = locations[Math.floor(Math.random() * locations.length)];
				this.mapOptions = { ...this.mapOptions, center: target, zoom: 15 };
				break;
			}

			default:
				break;
		}
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
