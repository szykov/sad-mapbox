import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '@app/actions';
import { IMenuAction } from '@app/interfaces';
import { MenuAction } from '@app/shared/common';

export interface State {
	menu: {
		actions: IMenuAction[] | null;
		selected: MenuAction | null;
	};
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
		action
	}))
);

export const getSelectedMenuAction = (state: State): IMenuAction | null => state?.menu.selected;
export const getMenuActions = (state: State): IMenuAction[] | null => state?.menu.actions;
