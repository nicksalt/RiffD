import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomPracticePage } from './select-custom-practice.page';

describe('SelectCustomPracticePage', () => {
  let component: SelectCustomPracticePage;
  let fixture: ComponentFixture<SelectCustomPracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomPracticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
