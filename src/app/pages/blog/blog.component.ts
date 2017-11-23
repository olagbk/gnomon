import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  // instantiate blog to an empty array
  posts: Post[];

  constructor(private blog: BlogService) { }

  ngOnInit() {
    // Retrieve blog from the API
    this.blog.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
