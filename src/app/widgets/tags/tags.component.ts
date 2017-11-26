import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: Tag[];
  @Input() deleteOnClick = false;
  @Output() tagSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectTag(tag) {
    this.tagSelected.emit(tag);
  }
}
