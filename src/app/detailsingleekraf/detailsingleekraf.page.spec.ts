import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsingleekrafPage } from './detailsingleekraf.page';

describe('DetailsingleekrafPage', () => {
  let component: DetailsingleekrafPage;
  let fixture: ComponentFixture<DetailsingleekrafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsingleekrafPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsingleekrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
