import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutupPage } from './tutup.page';

describe('TutupPage', () => {
  let component: TutupPage;
  let fixture: ComponentFixture<TutupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
