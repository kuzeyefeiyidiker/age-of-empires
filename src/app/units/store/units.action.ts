import { createAction, props } from '@ngrx/store';
import { Page, Unit, UnitFilter } from '../../common/types';

export const LoadUnits = createAction('[Units] Load units', props<{ filter: UnitFilter }>());
export const SetUnits = createAction('[Units] Set Units', props<{ units: Page<Unit> }>());
