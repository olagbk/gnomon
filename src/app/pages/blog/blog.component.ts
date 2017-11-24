import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[];

  constructor(private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.blog.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  goToPost(id) {
    this.router.navigate(['blog', id]);
  }

}
