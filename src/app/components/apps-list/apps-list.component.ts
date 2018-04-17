import { Component, OnInit } from '@angular/core';

//Services
import { AppsService } from "../../services/apps.service";
import { App } from "../../models/app.model";

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  
  private apps: App[];

  constructor(
    private appsService: AppsService
  ) { }

  ngOnInit() {
    this.appsService.getApps().subscribe((data:any) => {
      this.apps = data;
      console.log(this.apps);
    });
  }

}
