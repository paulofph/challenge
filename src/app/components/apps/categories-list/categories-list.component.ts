import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @Input() categories: string[];
  private selectedCategory: string;

  constructor() { }

  ngOnInit() {}

  private selectCategory(selectedCategory: string){
    this.selectedCategory = selectedCategory;
  }

}
