import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';
import { QuillModule } from 'ngx-quill/src/quill.module';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminBlogComponent } from './admin-blog.component';
import { AdminBlogEditorComponent } from './admin-blog-editor.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    QuillModule,
    ModalModule.forRoot()
  ],
  declarations: [ AdminComponent, AdminBlogComponent, AdminBlogEditorComponent ]
})
export class AdminModule { }
