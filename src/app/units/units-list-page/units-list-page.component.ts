import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Page, Unit, UnitFilter } from '../../common/types';
import { LoadUnits } from '../store/units.action';
import { UnitsState } from '../store/units.reducer';
import { GetUnits } from '../store/units.selector';

@Component({
  selector: 'app-units-list-page',
  templateUrl: './units-list-page.component.html',
  styleUrls: ['./units-list-page.component.scss'],
})
export class UnitsListPageComponent implements OnInit, OnDestroy {
  units: Page<Unit>;
  filter: UnitFilter = { page: 1, limit: 10 };
  isLoading = false;

  private readonly destroy$ = new Subject();

  // eslint-disable-next-line @ngrx/no-typed-global-store
  constructor(private store: Store<UnitsState>) {}

  ngOnInit(): void {
    // eslint-disable-next-line @ngrx/no-store-subscription
    this.store
      .select(GetUnits)
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.isLoading = state.loading;
        this.units = { ...state.units };
      });
    this.store.dispatch(LoadUnits({ filter: this.filter }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  changePage(page: number): void {
    this.filter = { ...this.filter, page };
    this.store.dispatch(LoadUnits({ filter: this.filter }));
  }

  onFilterChange(filter: UnitFilter): void {
    this.filter = { ...filter, page: 1, limit: 10 };
    this.store.dispatch(LoadUnits({ filter: this.filter }));
  }

  trackByFn(index: number, item: Unit): number {
    return item.id;
  }
}
