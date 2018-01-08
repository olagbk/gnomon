import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBlogComponent } from './admin-blog.component';
import {AdminBlogEditorComponent} from './admin-blog-editor.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
      { path: 'posts', component: AdminBlogComponent },
      { path: 'posts/:id', component: AdminBlogEditorComponent },
      { path: 'posts/new', component: AdminBlogEditorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
