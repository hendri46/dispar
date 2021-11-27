import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinderamataPage } from './cinderamata.page';

describe('CinderamataPage', () => {
  let component: CinderamataPage;
  let fixture: ComponentFixture<CinderamataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinderamataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinderamataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
