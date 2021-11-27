import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelPage } from './detailhotel.page';

describe('DetailhotelPage', () => {
  let component: DetailhotelPage;
  let fixture: ComponentFixture<DetailhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
