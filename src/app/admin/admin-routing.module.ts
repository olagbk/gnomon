import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBlogComponent } from './admin-blog.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full'},
      { path: 'blog', component: AdminBlogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
