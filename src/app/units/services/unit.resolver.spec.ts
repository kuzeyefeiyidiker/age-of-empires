import { TestBed } from '@angular/core/testing';

import { UnitResolver } from './unit.resolver';

describe('UnitResolver', () => {
  let resolver: UnitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UnitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
