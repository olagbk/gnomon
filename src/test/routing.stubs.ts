/* tslint:disable:directive-selector*/
/* tslint:disable:use-host-property-decorator*/
/* tslint:disable:no-input-rename*/

import { Directive, Input } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class ActivatedRouteStub {

  private psubject = new BehaviorSubject(this.testParams);
  private qpsubject = new BehaviorSubject(this.testQueryParams);
  params = this.psubject.asObservable();
  queryParams = this.qpsubject.asObservable();

  private _testParams: Params = {};
  private _testQueryParams: Params = {};
  get testParams() { return this._testParams; }
  get testQueryParams() { return this._testQueryParams; }
  set testQueryParams(params: {}) {
    this._testQueryParams = params;
    this.qpsubject.next(this._testQueryParams);
  }
  set testParams(params: {}) {
    this._testParams = params;
    this.psubject.next(this._testParams);
  }
  get snapshot() {
    return {
      params: this._testParams,
      queryParams: this._testQueryParams,
      url: [{path: 'path'}]
    };
  }
}
export class RouterStub {
  navigate(commands: string[], extras: any) { return Promise.resolve(true); }

  navigateByUrl(url: string) { return Promise.resolve(true); }
}
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
