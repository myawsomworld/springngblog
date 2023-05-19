import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
// import 'jasmine';
// import 'jest';
// import 'mocha';
import 'jest';
import {AuthService} from "../auth.service";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers:[AuthService]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
