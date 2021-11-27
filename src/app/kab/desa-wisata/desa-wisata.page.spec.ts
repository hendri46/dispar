import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaWisataPage } from './desa-wisata.page';

describe('DesaWisataPage', () => {
  let component: DesaWisataPage;
  let fixture: ComponentFixture<DesaWisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesaWisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesaWisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
