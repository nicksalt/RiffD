import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSelectModulePage } from './practice-select-module.page';

describe('PracticeSelectModulePage', () => {
  let component: PracticeSelectModulePage;
  let fixture: ComponentFixture<PracticeSelectModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSelectModulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSelectModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
