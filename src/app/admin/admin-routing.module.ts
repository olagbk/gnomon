// angular modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AdminComponent } from './admin.component';
import { AdminBlogComponent } from './admin-blog.component';
import { AdminBlogEditorComponent } from './admin-blog-editor.component';

// guards
import { CanDeactivateGuard } from '../app-routing.module';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: AdminBlogComponent
      },
      { path: 'posts/:id',
        component: AdminBlogEditorComponent,
        canDeactivate: [ CanDeactivateGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
