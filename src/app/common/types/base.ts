export class Page<T> {
  items: T[] | undefined;
  totalCount = 0;
  offset = 0;
  limit = 10;
  currentPage = 1;
  nextPage = false;
  prevPage = false;

  constructor(items: T[], count: number, page: number, offset = 0) {
    this.items = items;
    this.totalCount = count;
    this.currentPage = page;
    this.nextPage = this.limit + offset < this.totalCount;
    this.prevPage = this.limit + offset - this.items.length > 0;
  }
}
