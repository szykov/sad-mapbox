import { createReducer, on } from '@ngrx/store';

import { CompaniesActions } from '@app/mapbox/actions';
import { ICompany } from '@app/interfaces';

export interface State {
	selected: ICompany | null;
}

export const initialState: State = {
	selected: null
};

export const reducer = createReducer(
	initialState,
	on(CompaniesActions.loadSelectedCompanySuccess, (state, { selected }) => ({
		...state,
		selected
	}))
);

export const getSelectedCompany = (state: State): ICompany | null => state.selected;
