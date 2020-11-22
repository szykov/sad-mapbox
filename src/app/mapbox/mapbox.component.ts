import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromState from '@app/reducers';
import { CompaniesActions } from '@app/actions';

import { SadlMapInput } from 'projects/ngx-mapbox-sad/src/public-api';
import { MAPBOX_STYLE } from './mapbox-style';
import { Subject } from 'rxjs';
import { ICompany } from '@app/interfaces';

@Component({
	selector: 'sad-mapbox',
	templateUrl: './mapbox.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapboxComponent implements OnInit, OnDestroy {
	public options: SadlMapInput = {
		style: MAPBOX_STYLE,
		center: [-74.5, 40],
		zoom: 9
	};
	public company: ICompany | null = null;

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
