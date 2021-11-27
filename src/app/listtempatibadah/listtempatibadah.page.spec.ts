import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtempatibadahPage } from './listtempatibadah.page';

describe('ListtempatibadahPage', () => {
  let component: ListtempatibadahPage;
  let fixture: ComponentFixture<ListtempatibadahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtempatibadahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtempatibadahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
