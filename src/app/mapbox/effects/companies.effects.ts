import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { CompaniesActions } from '@app/mapbox/actions';

import { CompaniesService } from '@app/services';

@Injectable()
export class CompaniesEffects {
	constructor(private CompaniesService: CompaniesService, private actions$: Actions) {}

	loadCompanies$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CompaniesActions.loadCompanies),
			mergeMap(() =>
				this.CompaniesService.getAvailableCompanies().pipe(
					map((result) => CompaniesActions.loadCompaniesSuccess({ available: result }))
				)
			)
		)
	);

	loadSelectedCompany$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CompaniesActions.loadSelectedCompany),
			mergeMap(({ listID, token, receipt }) =>
				this.CompaniesService.getCompany(listID, token, receipt).pipe(
					map((result) => CompaniesActions.loadSelectedCompanySuccess({ selected: result }))
				)
			)
		)
	);
}
