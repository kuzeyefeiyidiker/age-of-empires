import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SAMPLE_UNIT } from './helpers/unit-detail-page.spec-helper';

import { UnitDetailPageComponent } from './unit-detail-page.component';

describe('UnitDetailPageComponent', () => {
  let component: UnitDetailPageComponent;
  let fixture: ComponentFixture<UnitDetailPageComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitDetailPageComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitDetailPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.unit = SAMPLE_UNIT;
    fixture.detectChanges();
  });

  it('should render unit info properly', () => {
    const backLink = debugElement.query(By.css('[data-testid="units-back-link"]'));
    const headerNameElement = debugElement.query(By.css('[data-testid="header-unit-name"]'));
    const headerDescriptionElement = debugElement.query(By.css('[data-testid="header-unit-description"]'));

    const id = debugElement.query(By.css('[data-testid="unit-id"]'));
    const name = debugElement.query(By.css('[data-testid="unit-name"]'));
    const description = debugElement.query(By.css('[data-testid="unit-description"]'));
    const age = debugElement.query(By.css('[data-testid="unit-age"]'));
    const woodCost = debugElement.query(By.css('[data-testid="unit-wood-cost"]'));
    const foodCost = debugElement.query(By.css('[data-testid="unit-food-cost"]'));
    const goldCost = debugElement.query(By.css('[data-testid="unit-gold-cost"]'));
    const buildTime = debugElement.query(By.css('[data-testid="unit-build-time"]'));
    const reloadTime = debugElement.query(By.css('[data-testid="unit-reload-time"]'));
    const hitPoints = debugElement.query(By.css('[data-testid="unit-hit-points"]'));
    const attack = debugElement.query(By.css('[data-testid="unit-attack"]'));
    const accuracy = debugElement.query(By.css('[data-testid="unit-accuracy"]'));

    expect(backLink).toBeTruthy();
    expect(headerNameElement).toBeTruthy();
    expect(headerDescriptionElement).toBeTruthy();
    expect(id).toBeTruthy();
    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
    expect(age).toBeTruthy();
    expect(woodCost).toBeTruthy();
    expect(foodCost).toBeTruthy();
    expect(goldCost).toBeTruthy();
    expect(buildTime).toBeTruthy();
    expect(reloadTime).toBeTruthy();
    expect(hitPoints).toBeTruthy();
    expect(attack).toBeTruthy();
    expect(accuracy).toBeTruthy();
  });
});
