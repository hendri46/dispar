import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisataPage } from './wisata.page';

describe('WisataPage', () => {
  let component: WisataPage;
  let fixture: ComponentFixture<WisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
