import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Page } from '../types';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges {
  @Input() page: Page<unknown> | undefined;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  pages: (string | number)[] | undefined = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page']?.currentValue) {
      if (this.page) {
        this.pages = new Array(Math.ceil((this.page.totalCount || 0) / (this.page.limit || 10))).fill(0);
      }
    }
  }

  nextPage(): void {
    if (this.page.nextPage) {
      this.page.currentPage += 1;
      this.pageChange.next(this.page.currentPage);
    }
  }

  prevPage(): void {
    if (this.page.prevPage && this.page.currentPage > 1) {
      this.page.currentPage -= 1;
      this.pageChange.next(this.page.currentPage);
    }
  }

  changePage(page: string | number): void {
    if (this.page) {
      this.page.currentPage = Number(page);
      this.pageChange.next(this.page.currentPage);
    }
  }
}
