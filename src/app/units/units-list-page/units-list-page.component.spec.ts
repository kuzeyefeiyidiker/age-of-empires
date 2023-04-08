import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { UnitsState } from '../store/units.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { UnitsListPageComponent } from './units-list-page.component';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { LoadUnits } from '../store/units.action';

describe('UnitsListPageComponent', () => {
  let component: UnitsListPageComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<UnitsListPageComponent>;
  let store$: Store<UnitsState>;

  async function setup(state: UnitsState): Promise<void> {
    await TestBed.configureTestingModule({
      declarations: [UnitsListPageComponent],
      providers: [provideMockStore({ initialState: state })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store$ = TestBed.inject(Store);
    fixture = TestBed.createComponent(UnitsListPageComponent);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  }

  beforeEach(async () => {
    await setup({ units: undefined });

    fixture = TestBed.createComponent(UnitsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load units', () => {
    spyOn(store$, 'dispatch');
    const expectedAction = LoadUnits({ filter: { page: 1, limit: 10 } });
    component.ngOnInit();
    expect(store$.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
