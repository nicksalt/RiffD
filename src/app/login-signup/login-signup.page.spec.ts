import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupPage } from './login-signup.page';

describe('LoginSignupPage', () => {
  let component: LoginSignupPage;
  let fixture: ComponentFixture<LoginSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
