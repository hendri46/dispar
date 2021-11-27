import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRestaurantPage } from './modal-restaurant.page';

describe('ModalRestaurantPage', () => {
  let component: ModalRestaurantPage;
  let fixture: ComponentFixture<ModalRestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRestaurantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
