import { Component, OnInit, ViewChild } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from '../../models/app.model';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import Utils from '../../_shared/ui/utils';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  public apps: App[] = [];
  public categories: string[]; //Category 'All' - Shows products from all categories
  public selectedCategory: string = "All";
  @ViewChild(CategoriesListComponent) categoriesListComponent: CategoriesListComponent; 
  
  constructor(
    private appsService: AppsService
  ) { }

  ngOnInit() {
    this.getApps(); 
  }

  public getApps(){
    let sortingCriteria = 'sumOfSubsPrices';
    this.appsService.getApps().subscribe((data:App[]) => {
      data.map(app => {
        this.apps.push(new App(app));
      });
      this.apps = Utils.sortArrayOfObjects(this.apps, sortingCriteria)
      this.getAllCategories();
    });
  }

  public getAllCategories(){
    let listsOfCategories = [];
    let listOfCategories = [];
    let defaultCategory = 'All';
    
    // Gets arrays of categories from all apps
    this.apps.map( app => {
      return listsOfCategories.push(app.categories);
    });
    listOfCategories = this.intersectionOfArrays(listsOfCategories);
    this.categories = listOfCategories;
    this.categories.push(defaultCategory);
    this.categories.sort();
  }

  // intersects a list of arrays(strings)
  // returns an array of common strings
  public intersectionOfArrays(listOfArrays: string[][]): string[]{
    let intersectionArray = [];
  
    listOfArrays.map(array => {
      array.map(item => {
        if(!intersectionArray.includes(item))
          return intersectionArray.push(item);
      });
    });
    return intersectionArray
  }

  private selectCategory(selectedCategory: string){
    this.selectedCategory = selectedCategory;
  }
}