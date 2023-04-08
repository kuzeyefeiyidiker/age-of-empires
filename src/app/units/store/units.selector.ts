import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitsState, UNITS_REDUCER } from './units.reducer';

const selectUnitFeature = createFeatureSelector<UnitsState>(UNITS_REDUCER);

// eslint-disable-next-line @ngrx/prefix-selectors-with-select
export const GetUnits = createSelector(selectUnitFeature, (state: UnitsState) => state);
