import { TestBed } from '@angular/core/testing';

import { RestaurantDataService } from './restaurant-data.service';

describe('RestaurantDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantDataService = TestBed.get(RestaurantDataService);
    expect(service).toBeTruthy();
  });
});
