import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHotelPage } from './modal-hotel.page';

describe('ModalHotelPage', () => {
  let component: ModalHotelPage;
  let fixture: ComponentFixture<ModalHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
