import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailibadahPage } from './detailibadah.page';

describe('DetailibadahPage', () => {
  let component: DetailibadahPage;
  let fixture: ComponentFixture<DetailibadahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailibadahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailibadahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
