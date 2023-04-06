import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsListPageComponent } from './units-list-page.component';

describe('UnitsListPageComponent', () => {
  let component: UnitsListPageComponent;
  let fixture: ComponentFixture<UnitsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
