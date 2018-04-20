import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppsListComponent } from './apps-list.component';
import {Pipe, PipeTransform, Component} from '@angular/core';

describe('AppsListComponent', () => {
  let component: AppsListComponent;
  let fixture: ComponentFixture<AppsListComponent>;
  @Pipe({name: 'paginate'})
  class PaginatePipe implements PipeTransform {
      transform(value: any): any {
          return value;
      }
  }
  @Pipe({name: 'category'})
  class CategoryPipe implements PipeTransform {
      transform(value: any): any {
          return value;
      }
  }
  @Pipe({name: 'price'})
  class PricePipe implements PipeTransform {
      transform(value: any): any {
          return value;
      }
  }
  @Pipe({name: 'search'})
  class SearchPipe implements PipeTransform {
      transform(value: any): any {
          return value;
      }
  }

  @Component({selector: 'pagination-controls', template: ''})
  class PaginateControlsStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppsListComponent,
        PaginatePipe,
        CategoryPipe,
        PricePipe,
        SearchPipe,
        PaginateControlsStubComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
