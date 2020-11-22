import { createSelector, createFeatureSelector, combineReducers, Action } from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromCompanies from './companies.reducer';

export interface MapState {
	companies: fromCompanies.State;
}

export interface State extends fromRoot.State {
	map: MapState;
}

export function reducers(state: MapState | undefined, action: Action): { companies: fromCompanies.State } {
	return combineReducers({
		companies: fromCompanies.reducer
	})(state, action);
}

// selector functions
const getFeatureState = createFeatureSelector<State, MapState>('map');
export const selectCompanies = createSelector(getFeatureState, (state: MapState) => state?.companies);

export const getCompany = createSelector(selectCompanies, fromCompanies.getSelectedCompany);
export const getAvailableCompanies = createSelector(selectCompanies, fromCompanies.getAvailableCompanies);
