import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToIcon'
})
export class CategoryToIconPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
        case 0:
            return 'Férfi'
        case 1:
            return 'Női'
        case 2:
            return 'Gyerek'
      }
  }
}
