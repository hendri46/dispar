import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailwisataPage } from './detailwisata.page';

describe('DetailwisataPage', () => {
  let component: DetailwisataPage;
  let fixture: ComponentFixture<DetailwisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailwisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailwisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
