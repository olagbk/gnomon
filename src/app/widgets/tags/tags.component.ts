import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: Tag[];
  @Input() deleteOnClick = false;
  @Input() selected = false;
  @Input() selectable = true;
  @Output() tagSelected: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  selectTag(tag) {
    this.tagSelected.emit(tag);
  }
}
