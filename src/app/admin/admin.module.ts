import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminBlogComponent } from './admin-blog.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ AdminComponent, AdminBlogComponent ]
})
export class AdminModule { }
