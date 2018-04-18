import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: any[], category: string): any {
    if(!category || category == 'All')
      return items;

    return items.filter( app => {
      return app.categories.includes(category);
    });
  }

}
