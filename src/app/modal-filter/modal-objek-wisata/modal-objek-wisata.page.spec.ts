import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObjekWisataPage } from './modal-objek-wisata.page';

describe('ModalObjekWisataPage', () => {
  let component: ModalObjekWisataPage;
  let fixture: ComponentFixture<ModalObjekWisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalObjekWisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObjekWisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
