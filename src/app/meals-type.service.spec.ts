import { TestBed } from '@angular/core/testing';

import { MealsTypeService } from './meals-type.service';

describe('MealsTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealsTypeService = TestBed.get(MealsTypeService);
    expect(service).toBeTruthy();
  });
});
