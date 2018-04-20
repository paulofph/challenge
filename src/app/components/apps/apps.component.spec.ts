import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponent } from './apps.component';
import { Component } from '@angular/core';

describe('AppsComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  @Component({selector: 'app-categories-list', template: ''})
  class CategoriesListStubComponent { }

  @Component({selector: 'app-apps-list', template: ''})
  class AppsListStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppsComponent,
        CategoriesListStubComponent,
        AppsListStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
