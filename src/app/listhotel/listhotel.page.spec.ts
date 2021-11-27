import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelPage } from './listhotel.page';

describe('ListhotelPage', () => {
  let component: ListhotelPage;
  let fixture: ComponentFixture<ListhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
