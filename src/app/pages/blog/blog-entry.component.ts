import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private blog: BlogService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.blog.getPost(params.id).then(post => {
        if (!post) { this.router.navigate(['blog']); }
        this.post = post;
      });
    });
  }
  searchTag($event) {
    this.router.navigate(['blog'], {queryParams: {tag: $event.name}});
  }

}
