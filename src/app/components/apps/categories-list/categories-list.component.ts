import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Utils from '../../../_shared/ui/utils';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})

export class CategoriesListComponent implements OnInit {

  @Input() categories: string[];
  @Output() selectCategoryEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public selectCategory(selectedCategory: string){
    this.selectCategoryEvent.emit(selectedCategory);
  }

}
