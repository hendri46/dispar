import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartPage } from './addcart.page';

describe('AddcartPage', () => {
  let component: AddcartPage;
  let fixture: ComponentFixture<AddcartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
