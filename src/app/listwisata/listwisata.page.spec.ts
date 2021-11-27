import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwisataPage } from './listwisata.page';

describe('ListwisataPage', () => {
  let component: ListwisataPage;
  let fixture: ComponentFixture<ListwisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListwisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
