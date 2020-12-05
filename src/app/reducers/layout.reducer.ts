import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '@app/actions';
import { IMenuAction } from '@app/interfaces';
import { MenuAction } from '@app/shared/common';

interface MenuState {
	actions: IMenuAction[] | null;
	selected: MenuAction | null;
}

export interface State {
	menu: MenuState;
}

export const initialState: State = {
	menu: {
		actions: [
			{ value: MenuAction.ZoomToCenter, description: 'Auto zoom to center' },
			{ value: MenuAction.ZoomToRandomPin, description: 'Zoom in to random pin' }
		],
		selected: null
	}
};

export const reducer = createReducer(
	initialState,
	on(LayoutActions.selectMenuAction, (state, { action }) => ({
		...state,
		menu: { actions: state.menu.actions, selected: action }
	}))
);

export const getMenu = (state: State): MenuState | null => state?.menu;
export const getSelectedMenuAction = (state: State): MenuAction | null => state?.menu.selected;
export const getMenuActions = (state: State): IMenuAction[] | null => state?.menu.actions;
