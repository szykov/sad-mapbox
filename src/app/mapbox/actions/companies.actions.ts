import { ICompany } from '@app/interfaces';
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
