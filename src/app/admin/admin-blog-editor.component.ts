import Quill from 'quill';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../core/pages/blog/blog.service';
import { Post, Tag } from '../core/pages/blog/post';

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
  quillModules: any = {};

  constructor(private blog: BlogService, private activatedRoute: ActivatedRoute, private router: Router, private renderer: Renderer2) {
    this.quillModules.toolbar = [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['image']];
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.blog.getPost(id).then(post => {
        if (!post) {
          return this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
        this.post = post;
        this.postTags = post.tags.map(t => t.name);
      });
    }
    this.blog.getTags().then(tags => this.allTags = tags);
  }
  savePost(): void {
    if (!this.post.title.trim()) { return alert('Title is required.'); }

    this.blog.editPost(this.post, this.postTags)
      .then(() => {
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }).catch(err => alert(err.message || err.name || err));
  }
  addTag(tag: any): void {
    if (!this.postTags.find(t => t === tag.value)) { this.postTags.push(tag.value); }
    tag.value = null;
  }
  deleteTag(tag: string): void {
    this.postTags = this.postTags.filter(t => t !== tag);
  }
  addImageElement(parent: any): void {
    const url = prompt('Enter image URL:');
    const imgEl = this.renderer.createElement('img');
    const pEl = this.renderer.createElement('p');

    this.renderer.setAttribute(imgEl, 'src', url);
    this.renderer.setAttribute(imgEl, 'vspace', '10');
    this.renderer.setAttribute(imgEl, 'width', '100%');
    this.renderer.appendChild(parent, imgEl);
    this.renderer.appendChild(parent, pEl);
  }
  setImageHandler(quill: Quill): void {
    quill.getModule('toolbar').addHandler('image', () => this.addImageElement(quill.root));
  }
}
