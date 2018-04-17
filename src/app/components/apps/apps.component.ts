import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from '../../models/app.model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  private apps: App[];
  
  constructor(
    private appsService: AppsService
  ) { }

  ngOnInit() {
    this.appsService.getApps().subscribe((data:any) => {
      this.apps = data;
    });
  }
}
