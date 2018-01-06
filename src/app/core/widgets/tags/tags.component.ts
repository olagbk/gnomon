import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  abbrNumTags = 5;
  @Input() tags: Tag[];
  @Input() count: boolean;
  @Input() abbr: boolean;
  @Input() selected: boolean;
  @Output() tagSelected: EventEmitter<Tag> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  selectTag(tag: Tag): void {
    this.tagSelected.emit(tag);
  }
}
