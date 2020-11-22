import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromCompanies from '@app/mapbox/reducers';
import { CompaniesActions } from '@app/mapbox/actions';

import { ICompanyName, IMenuLink } from '@app/interfaces';

@Component({
	selector: 'sad-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	public companies$: Observable<ICompanyName[] | null> | undefined;
	public selectedCompany: ICompanyName | undefined;

	public action: IMenuLink | undefined;
	public actions: IMenuLink[] = [
		{ value: 0, description: 'Load pins on map' },
		{ value: 1, description: 'Zoom in to specific pin' },
		{ value: 2, description: 'Change pins' },
		{ value: 3, description: 'Auto Zoom to center' }
	];

	constructor(private store: Store<fromCompanies.State>) {}

	public ngOnInit(): void {
		this.companies$ = this.store.select(fromCompanies.getAvailableCompanies);
	}

	public onSelectCompany(company: ICompanyName): void {
		this.store.dispatch(CompaniesActions.loadSelectedCompany({ listID: company.id, token: '' }));
	}

	public onSelectAction(value: number): void {
		console.log(value);
	}
}
