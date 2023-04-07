import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Unit } from '../../common/types';
import { UnitService } from './unit.service';

@Injectable()
export class UnitResolver implements Resolve<Unit> {
  constructor(private unitService: UnitService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unit> {
    return this.unitService.get(+route.params['unitId']);
  }
}
