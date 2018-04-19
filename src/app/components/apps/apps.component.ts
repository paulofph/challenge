import { Component, OnInit, ViewChild } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from '../../models/app.model';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import Utils from '../../_shared/ui/utils';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  private apps: App[] = [];
  private categories: string[]; //Category 'All' - Shows products from all categories
  private selectedCategory: string = "All";
  @ViewChild(CategoriesListComponent) categoriesListComponent: CategoriesListComponent; 
  
  constructor(
    private appsService: AppsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getApps(); 
  }

  private getApps(){
    let sortingCriteria = 'sumOfSubsPrices'
    this.appsService.getApps().subscribe((data:App[]) => {
      data.map(app => {
        this.apps.push(new App(app));
      });
      this.apps = Utils.sortArrayOfObjects(this.apps, sortingCriteria)
      this.getAllCategories();
    });
  }

  private getAllCategories(){
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
  private intersectionOfArrays(listOfArrays: string[][]): string[]{
    let intersectionArray = [];
  
    listOfArrays.map(array => {
      array.map(item => {
        if(!intersectionArray.includes(item))
          return intersectionArray.push(item);
      });
    });
    return intersectionArray
  }
}