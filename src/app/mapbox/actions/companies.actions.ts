import { ICompany, ICompanyName } from '@app/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadSelectedCompany = createAction(
	'[Company] Load Selected Company',
	props<{ listID: number; token: string; receipt?: string }>()
);

export const loadSelectedCompanySuccess = createAction(
	'[Company] Load Selected Company Success',
	props<{ selected: ICompany }>()
);

export const loadSelectedCompanyFailure = createAction(
	'[Company] Load Selected Company Failure',
	props<{ error: any }>()
);

export const loadCompanies = createAction('[Company] Load Companies');

export const loadCompaniesSuccess = createAction(
	'[Company] Load Companies Success',
	props<{ available: ICompanyName[] }>()
);

export const loadCompaniesFailure = createAction('[Company] Load Companies Failure', props<{ error: any }>());
