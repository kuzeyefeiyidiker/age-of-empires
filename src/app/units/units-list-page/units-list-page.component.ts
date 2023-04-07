import { Component, OnInit } from '@angular/core';
import { Page, Unit, UnitFilter } from '../../common/types';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-units-list-page',
  templateUrl: './units-list-page.component.html',
  styleUrls: ['./units-list-page.component.scss'],
})
export class UnitsListPageComponent implements OnInit {
  units: Page<Unit> = new Page([], 1, 0);
  filter: UnitFilter = { page: 1, limit: 10 };
  initialized = false;

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.load();
  }

  changePage(page: number): void {
    this.filter.page = page;
    this.load();
  }

  onFilterChange(filter: UnitFilter): void {
    this.filter = { ...filter, page: 1, limit: 10 };
    this.load();
  }

  trackByFn(index: number, item: Unit): number {
    return item.id;
  }

  private load(): void {
    this.initialized = false;
    this.unitService.getAll(this.filter).subscribe(res => {
      this.units = { ...res };
      this.initialized = true;
    });
  }
}
