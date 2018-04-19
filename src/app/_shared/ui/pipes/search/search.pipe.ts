import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if(!searchText)
      return items;

    const searchTextLowerCase = searchText.toLowerCase();
    
    return items.filter( app => {
      return app.name.toLowerCase().includes(searchTextLowerCase);
    });
  }

}
