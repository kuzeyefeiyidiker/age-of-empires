import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Page } from '../types';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let debugElement: DebugElement;

  const limit = 10;
  const totalCount = 45;
  const page = new Page(new Array(limit), totalCount, 1, 0);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    // Set component inputs
    component.page = page;
    component.ngOnChanges();

    fixture.detectChanges();
  });

  it('should render page buttons', () => {
    const navElement = debugElement.query(By.css('.pagination'));
    const pageLinks = debugElement.queryAll(By.css('.pagination-link'));
    const prevButton = debugElement.queryAll(By.css('.pagination-previous'));
    const nextButton = debugElement.queryAll(By.css('.pagination-next'));
    expect(component).toBeTruthy();
    expect(navElement).toBeTruthy();
    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
    const pageCount = Math.ceil(totalCount / limit);
    expect(pageLinks.length).toEqual(pageCount);
  });

  it('previous button should be disable', () => {
    component.page.prevPage = false;
    fixture.detectChanges();

    const previousButton = debugElement.query(By.css('.pagination-previous'));
    expect(previousButton.attributes['disabled']).toEqual('true');
  });

  it('should emit page value when click on page button', () => {
    spyOn(component.pageChange, 'next');
    const secondPageButton = debugElement.queryAll(By.css('.pagination-link'))[1];
    secondPageButton.triggerEventHandler('click');

    expect(component.pageChange.next).toHaveBeenCalled();
    expect(component.pageChange.next).toHaveBeenCalledWith(2);
  });

  it('previous button should be enable', () => {
    component.page.prevPage = true;
    fixture.detectChanges();
    const previousButton = debugElement.query(By.css('.pagination-previous'));
    expect(previousButton.attributes['disabled']).toEqual('false');
  });

  it('previous button should set and emit previous value', () => {
    component.page.currentPage = 2;
    component.page.prevPage = true;
    fixture.detectChanges();

    const previousButton = debugElement.query(By.css('.pagination-previous'));
    expect(previousButton.attributes['disabled']).toEqual('false');

    spyOn(component, 'prevPage');

    previousButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.prevPage).toHaveBeenCalled();
  });

  it('next button should set and emit next value', () => {
    component.page.currentPage = 1;
    component.page.nextPage = true;
    component.page.prevPage = false;
    fixture.detectChanges();

    const nextButton = debugElement.query(By.css('.pagination-next'));
    expect(nextButton.attributes['disabled']).toEqual('false');

    spyOn(component, 'nextPage');

    nextButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.nextPage).toHaveBeenCalled();
  });
});
