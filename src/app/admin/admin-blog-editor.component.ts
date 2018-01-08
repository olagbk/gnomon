import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../core/pages/blog/blog.service';
import {Post, Tag} from '../core/pages/blog/post';

@Component({
  selector: 'app-admin-blog-editor',
  templateUrl: './admin-blog-editor.component.html',
  styleUrls: ['./admin-blog-editor.component.scss']
})
export class AdminBlogEditorComponent implements OnInit {
  post: Post;
  postTags: string[];
  allTags: Tag[];
  searchedTag: Tag;

  constructor(private blog: BlogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.blog.getPost(id).then(post => {
        if (!post) { return this.router.navigate(['../'], {relativeTo: this.activatedRoute}); }
        this.post = post;
        this.postTags = post.tags.map(t => t.name);
      });
    }
    this.blog.getTags().then(tags => this.allTags = tags);
  }
  save() {
    console.log(this.post.body);
  }
  addTag(tag: any) {
    this.postTags.push(tag.value);
    tag.value = null;
  }
  deleteTag(tag: string) {
    this.postTags = this.postTags.filter(t => t !== tag);
  }

}
