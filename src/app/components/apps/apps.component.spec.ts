import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponent } from './apps.component';
import { Component, Input } from '@angular/core';
import { App } from '../../models/app.model';
import { Observable } from 'rxjs/Observable';
import { AppsService } from '../../services/apps.service';

describe('AppsComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  @Component({selector: 'app-categories-list', template: ''})
  class CategoriesListStubComponent { 
    @Input('categories')
    public categories: string[];
  }

  @Component({selector: 'app-apps-list', template: ''})
  class AppsListStubComponent {
    @Input('apps')
    public app: App;

    @Input('selectedCategory')
    public selectedCategory: string;
   }

  const appsArray: App[] = [
    {
      id: "1",
      name: "app1",
      description: "desc1",
      categories: ["Channels", "Productivity"],
      subscriptions:[],
      sumOfSubsPrices: 1
    }
  ];
  let appsService: AppsService;
  class MockAppsArray {
    public getApps(): Observable<any> {
      return Observable.of(appsArray);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppsComponent,
        CategoriesListStubComponent,
        AppsListStubComponent
      ],
      providers:[
        {provide: AppsService, useClass: MockAppsArray}
      ]
    })
    .compileComponents();
    appsService = TestBed.get(AppsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
