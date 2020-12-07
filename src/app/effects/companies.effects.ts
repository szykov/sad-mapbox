import { Injectable } from '@angular/core';

import { mergeMap, map } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import { CompaniesActions } from '@app/actions';
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

	loadSelectedCompanies$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CompaniesActions.loadSelectedCompanies),
			// in real app should be caching applied or having dedicated api
			mergeMap(({ ids }) =>
				ids.length ? forkJoin(ids.map((id) => this.CompaniesService.getCompany(id))) : of([])
			),
			map((result) => CompaniesActions.loadSelectedCompaniesSuccess({ selected: result }))
		)
	);
}
