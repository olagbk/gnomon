import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  abbrNumTags = 5;
  @Input() tags: Tag[];
  @Input() abbr = false;
  @Input() selected = false;
  @Output() tagSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectTag(tag) {
    this.tagSelected.emit(tag);
  }
}
