import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBDataPage } from './dbdata.page';

describe('DBDataPage', () => {
  let component: DBDataPage;
  let fixture: ComponentFixture<DBDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
