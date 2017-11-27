import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../pages/blog/blog.service';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements OnInit {
  activeTags: Tag[] = [];
  inactiveTags: Tag[];
  @Output() selected: EventEmitter<Tag> = new EventEmitter();
  @Output() deselected: EventEmitter<Tag> = new EventEmitter();

  constructor(private blog: BlogService) { }

  ngOnInit() {
    this.blog.getTags().then(tags => this.inactiveTags = tags);
  }
  select(tag) {
    this.inactiveTags = this.inactiveTags.filter(t => t.name !== tag.name);
    this.activeTags.push(tag);
    this.selected.emit(tag);
  }
  deselect(tag) {
    this.activeTags = this.activeTags.filter(t => t.name !== tag.name);
    this.inactiveTags.push(tag);
    this.deselected.emit(tag);
  }
}
