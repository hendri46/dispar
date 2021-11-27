import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrestoranPage } from './detailrestoran.page';

describe('DetailrestoranPage', () => {
  let component: DetailrestoranPage;
  let fixture: ComponentFixture<DetailrestoranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailrestoranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrestoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
