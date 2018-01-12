import { Component } from '@angular/core';

import { Tag } from '../app/core/pages/blog/post';

@Component({
  selector: 'app-tags-host',
  template: `<app-tags [tags]="tags" [count]="count" [abbr]="abbr" [selected]="selected" (tagSelected)="selectTag($event)"></app-tags>`
})
export class TagsHostStubComponent {
  tags: Tag[];
  count: boolean;
  abbr: boolean;
  selected: boolean;
  selectTag($event) {}
}

@Component({
  selector: 'app-pagination-host',
  template:
      `<app-pagination [items]="items"
                       [perPage]="perPage"
                       [perPageOpts]="perPageOpts"
                       (perPageChanged)="onSelect($event)"></app-pagination>`
})
export class PaginationHostStubComponent {
  items: number;
  perPage: number;
  perPageOpts: number[];
  currentPage:  number;
  onSelect($event) {
    this.perPage = $event.perPage;
    this.currentPage = $event.currentPage;
  }
}
