import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `<span></span>`
})
export class GalleryStubComponent {
  @Input() album: string;
}
