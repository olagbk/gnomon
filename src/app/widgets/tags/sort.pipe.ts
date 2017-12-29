import { PipeTransform, Pipe } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Pipe({name: 'sort'})

export class SortPipe implements PipeTransform {
  transform(set: Tag[]): Tag[] {
    return set.sort((a: Tag, b: Tag): number =>  b.count - a.count);
  }
}
