import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from './blog.service';
import { Post, Tag } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  post: Post;
  recentPosts: Promise<Post[]>;
  recentPostsCount = 10;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private blog: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blog.getPost(params.id).then(post => {
        if (!post) { this.router.navigate(['blog']); }
        this.post = post;
        this.recentPosts = this.blog.getPosts({params: {count: this.recentPostsCount}});
      });
    });
  }
  searchTag(tag: Tag): void {
    this.router.navigate(['blog'], {queryParams: {tag: tag.name}});
  }
}
