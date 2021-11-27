import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempatIbadahPage } from './tempat-ibadah.page';

describe('TempatIbadahPage', () => {
  let component: TempatIbadahPage;
  let fixture: ComponentFixture<TempatIbadahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempatIbadahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempatIbadahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
