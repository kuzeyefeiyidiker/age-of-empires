import { Action, createReducer, on } from '@ngrx/store';
import { Page, Unit } from 'src/app/common/types';
import { LoadUnits, SetUnits } from './units.action';

export const UNITS_REDUCER = 'unitsReducer';

export interface UnitsState {
  loading?: boolean;
  units: Page<Unit>;
  action?: string;
}

const initialState: UnitsState = {
  units: undefined,
};

const tempUnitsReducer = createReducer(
  initialState,
  on(LoadUnits, (state: UnitsState): UnitsState => ({ ...state, loading: true })),
  on(SetUnits, (state, action): UnitsState => ({ ...state, loading: false, units: action.units }))
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function unitsReducerFn(state: UnitsState, action: Action) {
  return tempUnitsReducer(state, action);
}
