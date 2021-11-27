import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencarianPage } from './pencarian.page';

describe('PencarianPage', () => {
  let component: PencarianPage;
  let fixture: ComponentFixture<PencarianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencarianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
