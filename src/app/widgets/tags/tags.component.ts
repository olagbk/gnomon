import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../pages/blog/post';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: Tag[];
  constructor() { }

  ngOnInit() {
  }

}
