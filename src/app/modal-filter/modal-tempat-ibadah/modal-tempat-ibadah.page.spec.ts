import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTempatIbadahPage } from './modal-tempat-ibadah.page';

describe('ModalTempatIbadahPage', () => {
  let component: ModalTempatIbadahPage;
  let fixture: ComponentFixture<ModalTempatIbadahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTempatIbadahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTempatIbadahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
