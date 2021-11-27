import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEkrafPage } from './detail-ekraf.page';

describe('DetailEkrafPage', () => {
  let component: DetailEkrafPage;
  let fixture: ComponentFixture<DetailEkrafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEkrafPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEkrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
