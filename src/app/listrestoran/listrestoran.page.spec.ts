import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrestoranPage } from './listrestoran.page';

describe('ListrestoranPage', () => {
  let component: ListrestoranPage;
  let fixture: ComponentFixture<ListrestoranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrestoranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrestoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
