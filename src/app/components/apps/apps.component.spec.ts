import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponent } from './apps.component';
import { Component, Input, ViewChild } from '@angular/core';
import { App } from '../../models/app.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppsService } from '../../services/apps.service';
import { CategoriesListComponent } from './categories-list/categories-list.component';

describe('AppsComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  @Component({selector: 'app-categories-list', template: ''})
  class CategoriesListStubComponent { 
    @Input('categories')
    public categories: string[];

    selectedCategory = jasmine.createSpy('selectedCategory').and
  }

  @Component({selector: 'app-apps-list', template: ''})
  class AppsListStubComponent {
    @Input('apps')
    public app: App;

    @Input('selectedCategory')
    public selectedCategory: string;
   }

   const selectedCategory: string = 'All';

   const appsArray: App[] = [
    {
      id: "1",
      name: "app1",
      description: "desc1",
      categories: ["Channels", "Productivity"],
      subscriptions:[],
      sumOfSubsPrices: 1
    },
    {
      id: "2",
      name: "app2",
      description: "desc1",
      categories: ["Reporting"],
      subscriptions:[],
      sumOfSubsPrices: 1
    }
  ];
 

  const AppsServiceSpy = jasmine.createSpyObj('AppsService', ['getApps']);

  beforeEach(async(() => {
 

    TestBed.configureTestingModule({
      declarations: [ 
        AppsComponent,
        CategoriesListStubComponent,
        AppsListStubComponent
      ],
      providers: [
        { provide: AppsService, useValue: AppsServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    let getAppsSpy = AppsServiceSpy.getApps.and.returnValue(Observable.of(appsArray));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get all categories returns correctly',() => {
    component.getAllCategories();
    expect(component.categories.length).toBe(4);
  });

  it('intersectionOfArrays returns correctly', () => {
    const array1 = ['data1', 'data2'];
    const array2 = ['data2', 'data3'];
    const globalArray = [array1, array2];
    expect(component.intersectionOfArrays(globalArray).length).toBe(3);
  });
});
