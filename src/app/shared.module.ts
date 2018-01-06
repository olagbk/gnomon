import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './widgets/scroll/scroll.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ScrollComponent ],
  declarations: [ ScrollComponent ]
})
export class SharedModule { }
