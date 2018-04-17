import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from '../../models/app.model';
import { Category } from '../../models/category';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  private apps: App[];
  private categories: Category[] = [];
  
  constructor(
    private appsService: AppsService
  ) { }

  ngOnInit() {
    this.getApps();
    
  }

  private getApps(){
    this.appsService.getApps().subscribe((data:App[]) => {
      this.apps = data;
      this.extractAllCategories()
    });
  }

  private extractAllCategories(){
    this.apps.map(app => {
      if(!app.categories)
        return;
      app.categories.map(category => {
        if(this.categories.includes(category)
      });
    });
  }
}
