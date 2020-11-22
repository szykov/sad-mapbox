import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromState from '@app/reducers';
import { CompaniesActions } from '@app/actions';

import {
	ISadlFlyToInput,
	ISadlGeoLocation,
	ISadlMapInput,
	ISadlMarkerInput
} from 'projects/ngx-mapbox-sad/src/public-api';
import { MAPBOX_STYLE } from './mapbox-style';
import { Subject } from 'rxjs';
import { ICompany } from '@app/interfaces';

@Component({
	selector: 'sad-mapbox',
	templateUrl: './mapbox.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapboxComponent implements OnInit, OnDestroy {
	public options: ISadlMapInput = {
		style: MAPBOX_STYLE,
		center: [-74.5, 40],
		zoom: 9
	};
	public company: ICompany | null = null;
	public get markers(): ISadlMarkerInput {
		let locations = this.company?.records.map(
			(record) =>
				({
					longitude: Number(record.geocode.Longitude),
					latitude: Number(record.geocode.Latitude)
				} as ISadlGeoLocation)
		);
		return { locations: locations, options: {} } as ISadlMarkerInput;
	}
	public get flyTo(): ISadlFlyToInput {
		return {
			center: {
				longitude: Number(this.company?.records[0].geocode.Longitude),
				latitude: Number(this.company?.records[0].geocode.Latitude)
			}
		};
	}

	private unsubscribe$: Subject<void> = new Subject();

	constructor(private store: Store<fromState.State>, private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.store.dispatch(CompaniesActions.loadCompanies());

		this.store
			.select(fromState.getCompany)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((company) => {
				this.company = company;
				this.cdr.detectChanges();
			});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
