import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromState from '@app/reducers';
import { CompaniesActions, LayoutActions } from '@app/actions';

import { ICompanyName, IMenuAction } from '@app/interfaces';
import { MenuAction } from '@app/shared/common';

@Component({
	selector: 'sad-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	public companies$: Observable<ICompanyName[] | null> | undefined;
	public selectedCompany: ICompanyName | undefined;

	public selectedAction: IMenuAction | undefined;
	public actions$: Observable<IMenuAction[] | null> | undefined;

	constructor(private store: Store<fromState.State>) {}

	public ngOnInit(): void {
		this.companies$ = this.store.select(fromState.getAvailableCompanies);
		this.actions$ = this.store.select(fromState.getMenuActions);
	}

	public onSelectCompany(companies: ICompanyName[]): void {
		let ids = companies.map((company) => company.id);
		this.store.dispatch(CompaniesActions.loadSelectedCompanies({ ids: ids }));
	}

	public onSelectAction(action: MenuAction): void {
		this.store.dispatch(LayoutActions.selectMenuAction({ action }));
	}
}
