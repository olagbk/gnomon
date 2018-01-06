import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ScrollComponent } from './scroll/scroll.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot()
  ],
  exports: [
    ScrollComponent,
    SpinnerComponent,
    PaginationComponent,
    FormsModule
  ],
  declarations: [
    ScrollComponent,
    SpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
