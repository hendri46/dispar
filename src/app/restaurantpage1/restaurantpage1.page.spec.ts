import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurantpage1Page } from './restaurantpage1.page';

describe('Restaurantpage1Page', () => {
  let component: Restaurantpage1Page;
  let fixture: ComponentFixture<Restaurantpage1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Restaurantpage1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurantpage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
