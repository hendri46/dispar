import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListekrafPage } from './listekraf.page';

describe('ListekrafPage', () => {
  let component: ListekrafPage;
  let fixture: ComponentFixture<ListekrafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListekrafPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListekrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
