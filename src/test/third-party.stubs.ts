/* tslint:disable:component-selector*/

import { Component, Input, TemplateRef } from '@angular/core';

export class GalleryServiceStub {
  load() {}
  set() {}
}
export class BsModalServiceStub {
  show(template: TemplateRef<any>) { return { hide() {} }; }
}

@Component({
  selector: 'pagination',
  template: `<span></span>`
})
export class BootstrapPaginationStubComponent {
  @Input() totalItems: number;
  @Input() maxSize: number;
  @Input() itemsPerPage: number;
}
