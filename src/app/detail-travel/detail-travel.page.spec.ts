import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTravelPage } from './detail-travel.page';

describe('DetailTravelPage', () => {
  let component: DetailTravelPage;
  let fixture: ComponentFixture<DetailTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTravelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
