import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsListFilterComponent } from './units-list-filter.component';

describe('UnitsListFilterComponent', () => {
  let component: UnitsListFilterComponent;
  let fixture: ComponentFixture<UnitsListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
