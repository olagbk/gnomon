import Quill from 'quill';
import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
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
  searchedTag: Tag;
  allTags: Tag[];
  postTags: string[] = [];
  quillModules: any = {};
  isSaved = false;
  @ViewChild('editor') editor: Quill;

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
    this.blog.getTags().then(tags => this.allTags = tags);

    const id = this.activatedRoute.snapshot.params.id;
    if (id === 'new') {
      this.post = new Post('');
    } else {
      this.blog.getPost(id).then(post => {
        if (!post) {
          return this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
        this.post = post;
        this.postTags = post.tags.map(t => t.name);
      });
    }
  }

  savePost(): void {
    if (!this.post.title.trim()) { return alert('Title is required.'); }

    const method = (this.post.id) ? 'editPost' : 'createPost';
    this.blog[method](this.post, this.postTags)
      .then(() => {
        this.isSaved = true;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }).catch(err => alert(err.message || err.name || err));
  }

  addTag(tag: any): void {
    const value = tag.value.trim();
    if (!value) { return; }
    if (!this.postTags.find(t => t === value)) { this.postTags.push(value); }
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

  canDeactivate(): boolean {
    if (this.isSaved) {
      return true;
    } else {
      return confirm(`Your post has not been saved. Are you sure you want to leave this page?`);
    }
  }
}
