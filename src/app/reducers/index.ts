import { createSelector, createFeatureSelector, MetaReducer, ActionReducerMap, ActionReducer } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from 'src/environments/environment';
import * as fromCompanies from './companies.reducer';
import * as fromLayout from './layout.reducer';

export interface State {
	companies: fromCompanies.State;
	layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
	companies: fromCompanies.reducer,
	layout: fromLayout.reducer
};

export function debug(reducer: ActionReducer<unknown, any>): ActionReducer<unknown, any> {
	return function (state, action) {
		console.log('state', state);
		console.log('action', action);

		return reducer(state, action);
	};
}

export const metaReducers: MetaReducer<unknown, any>[] = !environment.production ? [debug, storeFreeze] : [];

// selector functions
const getCompaniesFeature = createFeatureSelector<fromCompanies.State>('companies');
const getLayoutFeature = createFeatureSelector<fromLayout.State>('layout');

export const getCompanies = createSelector(getCompaniesFeature, fromCompanies.getSelectedCompanies);
export const getAvailableCompanies = createSelector(getCompaniesFeature, fromCompanies.getAvailableCompanies);

export const getMenu = createSelector(getLayoutFeature, fromLayout.getMenu);
export const getMenuActions = createSelector(getLayoutFeature, fromLayout.getMenuActions);
export const getSelectedMenuAction = createSelector(getLayoutFeature, fromLayout.getSelectedMenuAction);
