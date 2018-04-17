import { Component, OnInit, Input } from '@angular/core';
import { App } from '../../../models/app.model';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  @Input() apps: App[];

  constructor() { }

  ngOnInit() {}

  private isLastElementOfArray(index: number, arrayLength: number){
    // check if is the index of last element of the array
    if(index == (arrayLength-1))
      return true;
    return false;
  }
}
