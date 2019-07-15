import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSingleSessionElementPage } from './practice-single-session-element.page';

describe('PracticeSingleSessionElementPage', () => {
  let component: PracticeSingleSessionElementPage;
  let fixture: ComponentFixture<PracticeSingleSessionElementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSingleSessionElementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSingleSessionElementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
