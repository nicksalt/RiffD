import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSessionPage } from './start-session.page';

describe('StartSessionPage', () => {
  let component: StartSessionPage;
  let fixture: ComponentFixture<StartSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSessionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
