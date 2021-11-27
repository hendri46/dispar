import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderreviewPage } from './orderreview.page';

describe('OrderreviewPage', () => {
  let component: OrderreviewPage;
  let fixture: ComponentFixture<OrderreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
