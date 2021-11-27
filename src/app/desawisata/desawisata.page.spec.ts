import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesawisataPage } from './desawisata.page';

describe('DesawisataPage', () => {
  let component: DesawisataPage;
  let fixture: ComponentFixture<DesawisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesawisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesawisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
