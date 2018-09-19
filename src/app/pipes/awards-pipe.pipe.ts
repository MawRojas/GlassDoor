import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awardsPipe'
})
export class AwardsPipePipe implements PipeTransform {

  transform(items: any[], args?: any): any[] {
    items.sort((a: any, b: any) => {
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      } else {
        return 0;
      }
    })
    return items;
  }
}
