import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';


import { BlogService } from '../core/pages/blog/blog.service';
import { Post } from '../core/pages/blog/post';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  @ViewChild('template') modalTemplate: TemplateRef<any>;
  modalRef: BsModalRef;
  posts: Post[];
  postToDelete: Post;
  processing = false;

  constructor(private blog: BlogService, private modal: BsModalService, private router: Router) { }

  ngOnInit()  {
    this.blog.getPosts().then(posts => this.posts = posts);
  }
  openModal(post: Post) {
    this.postToDelete = post;
    this.modalRef = this.modal.show(this.modalTemplate);
  }
  deletePost(): void {
    this.modalRef.hide();
    this.processing = true;

    this.blog.deletePost(this.postToDelete.id)
      .then(() => {
        this.processing = false;
        this.posts = this.posts.filter(post => post.id !== this.postToDelete.id);
      })
      .catch(err => {
        this.processing = false;
        if (err.status === 401) {
          this.router.navigate(['/login']);
        } else {
          alert(`Post can't be deleted: ${err.statusText || err}`);
        }
      });
    }
  }

