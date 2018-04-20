import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
describe('AppComponent', () => {
  @Component({selector: 'router-outlet', template: ''})
  class RouterOutletStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
