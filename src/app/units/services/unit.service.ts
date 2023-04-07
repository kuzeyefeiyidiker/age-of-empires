import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Page, Unit, UnitFilter } from '../../common/types';
import { UnitAgesFilter } from '../../utils/units';

@Injectable({ providedIn: 'root' })
export class UnitService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getAll(filters: UnitFilter = { page: 1, limit: 10 }): Observable<Page<Unit>> {
    return this.http.get<Observable<Page<Unit>>>(this.jsonUrl).pipe(
      map((data: any) => {
        let result: Unit[] = [];
        if (data['units']) {
          const filterFn = this.unitsFilterFn.call(this, filters);
          result = data.units.filter(filterFn);
        }
        const offset = (filters.page - 1) * filters.limit;
        const items = result.slice(offset, offset + filters.limit);
        const page = new Page(items, result.length, filters.page, offset);
        return page;
      }),
      delay(500)
    );
  }

  public get(id: number): Observable<Unit | undefined> {
    return this.http.get<Observable<Unit>>(this.jsonUrl).pipe(
      map((data: any) => {
        const units = (data.units || []) as Unit[];
        return units.find(item => item.id === id);
      }),
      delay(1000)
    );
  }

  private unitsFilterFn(filters: UnitFilter) {
    const filterFn = (unit: Unit) => {
      const selectedAge = filters.age ? UnitAgesFilter[filters.age] : 0;
      const selectedCosts = filters.cost || {};
      const hasValidAge = UnitAgesFilter[unit.age] >= selectedAge;
      let hasValidCost = true;
      hasValidCost = Object.entries(selectedCosts).every(([costType, rangeValues]) => {
        const minVal: number = rangeValues[0];
        const maxVal: number = rangeValues[1];
        const unitCost = unit.cost ? unit.cost[costType] : 0;
        return unit.cost && unit.cost[costType] && unitCost >= minVal && unitCost <= maxVal;
      });
      return hasValidCost && hasValidAge;
    };
    return filterFn;
  }
}
