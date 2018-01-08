// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// bootstrap modules
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// components
import { ScrollComponent } from './scroll/scroll.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnerScreenComponent } from './spinner-screen/spinner-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    ScrollComponent,
    SpinnerComponent,
    PaginationComponent,
    SpinnerScreenComponent,
    FormsModule,
    TypeaheadModule
  ],
  declarations: [
    ScrollComponent,
    SpinnerComponent,
    PaginationComponent,
    SpinnerScreenComponent
  ]
})
export class SharedModule { }
