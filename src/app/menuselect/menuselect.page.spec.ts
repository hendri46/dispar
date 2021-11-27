import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuselectPage } from './menuselect.page';

describe('MenuselectPage', () => {
  let component: MenuselectPage;
  let fixture: ComponentFixture<MenuselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuselectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
