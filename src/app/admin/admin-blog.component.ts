import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';


import { BlogService } from '../pages/blog/blog.service';
import { Post } from '../pages/blog/post';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  @ViewChild('template') modalTemplate: TemplateRef<any>;
  modalRef: BsModalRef;
  posts: Promise<Post[]>;
  postToDelete: string;

  constructor(private blog: BlogService, private modal: BsModalService) { }

  ngOnInit() {
    this.posts = this.blog.getPosts();
  }
  openModal(title: string) {
    this.postToDelete = title;
    this.modalRef = this.modal.show(this.modalTemplate);
  }
  deletePost(){
    this.modalRef.hide();
  }
}
