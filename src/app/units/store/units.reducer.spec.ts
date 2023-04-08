import { DUMMY_UNITS } from 'src/app/common/spec-helpers/unit.spec-helper';
import { LoadUnits, SetUnits } from './units.action';
import { unitsReducerFn, UnitsState } from './units.reducer';

const initialState: UnitsState = { units: undefined };

describe('Reducer: Units', () => {
  it('load units', () => {
    const state = unitsReducerFn(initialState, LoadUnits({ filter: { page: 1, limit: 10 } }));
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('set loaded units', () => {
    const state = unitsReducerFn(initialState, SetUnits({ units: DUMMY_UNITS }));
    expect(state).toEqual({ loading: false, units: DUMMY_UNITS });
  });
});
