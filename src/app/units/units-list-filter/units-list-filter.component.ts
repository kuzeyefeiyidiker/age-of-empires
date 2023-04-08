import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UnitAgesFilter } from 'src/app/utils/units';
import { UnitAges, UnitCostTypes, UnitFilter } from 'src/app/common/types';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-units-list-filter',
  templateUrl: './units-list-filter.component.html',
  styleUrls: ['./units-list-filter.component.scss'],
})
export class UnitsListFilterComponent implements OnInit, OnDestroy {
  @Output() filterChanged: EventEmitter<UnitFilter> = new EventEmitter();

  ageTypes = Object.keys(UnitAgesFilter) as UnitAges[];
  costTypes: UnitCostTypes[] = ['Wood', 'Food', 'Gold'];
  form = new FormGroup({
    age: new FormControl(),
    cost: new FormGroup({}),
  });

  sliderOptions: Options[] = [];
  private readonly destroy$ = new Subject();

  get costFilterForm(): FormGroup {
    return this.form.get('cost') as FormGroup;
  }

  ngOnInit(): void {
    this.initCostFilters();
    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(300)).subscribe(() => {
      this.filterChanged.emit(this.getFilters());
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  changeAge(selection?: UnitAges): void {
    this.form.controls.age.setValue(selection);
  }

  private getFilters(): UnitFilter {
    const cost: Record<UnitCostTypes | string, number[]> = {};
    this.costTypes.forEach((type, index) => {
      const formGroup = this.costFilterForm.get(type) as FormGroup;
      this.sliderOptions[index] = Object.assign({}, { floor: 0, ceil: 200, disabled: !formGroup.value.enabled });
      if (formGroup.value.enabled) {
        cost[type] = formGroup.value.rangeValue || [0, 200];
      }
    });
    return { cost, age: this.form.value.age };
  }

  private initCostFilters(): void {
    this.costTypes.forEach(item => {
      this.sliderOptions.push({ floor: 0, ceil: 200, step: 1, disabled: true });
      this.costFilterForm.addControl(
        item,
        new FormGroup({
          enabled: new FormControl(),
          rangeValue: new FormControl([25, 50]),
        })
      );
    });
  }
}
