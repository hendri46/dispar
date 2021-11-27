import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeniswisataPage } from './jeniswisata.page';

describe('JeniswisataPage', () => {
  let component: JeniswisataPage;
  let fixture: ComponentFixture<JeniswisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeniswisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeniswisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
