import { createReducer, on } from '@ngrx/store';

import { CompaniesActions } from '@app/actions';
import { ICompany, ICompanyName } from '@app/interfaces';

export interface State {
	selected: ICompany | null;
	available: ICompanyName[] | null;
}

export const initialState: State = {
	selected: null,
	available: null
};

export const reducer = createReducer(
	initialState,
	on(CompaniesActions.loadSelectedCompanySuccess, (state, { selected }) => ({
		...state,
		selected
	})),
	on(CompaniesActions.loadCompaniesSuccess, (state, { available }) => ({
		...state,
		available
	}))
);

export const getSelectedCompany = (state: State): ICompany | null => state?.selected;
export const getAvailableCompanies = (state: State): ICompanyName[] | null => state?.available;
