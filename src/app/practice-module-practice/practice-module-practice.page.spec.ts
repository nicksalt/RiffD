import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeModulePracticePage } from './practice-module-practice.page';

describe('PracticeModulePracticePage', () => {
  let component: PracticeModulePracticePage;
  let fixture: ComponentFixture<PracticeModulePracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeModulePracticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeModulePracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
