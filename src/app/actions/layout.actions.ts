import { MenuAction } from '@app/shared/common';
import { createAction, props } from '@ngrx/store';

export const selectMenuAction = createAction('[Layout] Select Menu Action', props<{ action: MenuAction }>());
