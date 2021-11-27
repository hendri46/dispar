import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDesaPage } from './detail-desa.page';

describe('DetailDesaPage', () => {
  let component: DetailDesaPage;
  let fixture: ComponentFixture<DetailDesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
