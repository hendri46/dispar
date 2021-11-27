import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadarwisataPage } from './sadarwisata.page';

describe('SadarwisataPage', () => {
  let component: SadarwisataPage;
  let fixture: ComponentFixture<SadarwisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadarwisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadarwisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
