import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substr(0,20) + '...';
  }

}
