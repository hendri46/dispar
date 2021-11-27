import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEkrafPage } from './list-ekraf.page';

describe('ListEkrafPage', () => {
  let component: ListEkrafPage;
  let fixture: ComponentFixture<ListEkrafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEkrafPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEkrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
