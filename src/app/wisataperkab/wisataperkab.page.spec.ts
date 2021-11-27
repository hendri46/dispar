import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisataperkabPage } from './wisataperkab.page';

describe('WisataperkabPage', () => {
  let component: WisataperkabPage;
  let fixture: ComponentFixture<WisataperkabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisataperkabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisataperkabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
