import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCinderamataPage } from './detail-cinderamata.page';

describe('DetailCinderamataPage', () => {
  let component: DetailCinderamataPage;
  let fixture: ComponentFixture<DetailCinderamataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCinderamataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCinderamataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
