import { ICompany, ICompanyName } from '@app/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadSelectedCompanies = createAction('[Company] Load Selected Company', props<{ ids: number[] }>());

export const loadSelectedCompaniesSuccess = createAction(
	'[Company] Load Selected Company Success',
	props<{ selected: ICompany[] }>()
);

export const loadCompanies = createAction('[Company] Load Companies');

export const loadCompaniesSuccess = createAction(
	'[Company] Load Companies Success',
	props<{ available: ICompanyName[] }>()
);

export const loadCompaniesFailure = createAction('[Company] Load Companies Failure', props<{ error: any }>());
