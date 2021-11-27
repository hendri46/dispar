import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeritaPage } from './detail-berita.page';

describe('DetailBeritaPage', () => {
  let component: DetailBeritaPage;
  let fixture: ComponentFixture<DetailBeritaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBeritaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
