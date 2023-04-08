import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { UnitService } from '../services/unit.service';
import { LoadUnits, SetUnits } from './units.action';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/member-ordering */
@Injectable()
export class UnitsEffect {
  constructor(private actions$: Actions, private unitService: UnitService) {}

  loadUnits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadUnits),
      switchMap(action => {
        return this.unitService.getAll(action.filter).pipe(map(data => SetUnits({ units: data })));
      })
    );
  });
}
