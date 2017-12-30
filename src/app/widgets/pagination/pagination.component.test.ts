/* tslint:disable:no-unused-expression */
import { should } from 'chai';
import * as sinon from 'sinon';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PaginationHostStubComponent, BootstrapPaginationStubComponent, RouterStub, ActivatedRouteStub } from '../../../../test/stubs';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let hostFixture: ComponentFixture<PaginationHostStubComponent>;
  let hostComponent: PaginationHostStubComponent;
  let component: PaginationComponent;
  let activatedRoute: ActivatedRouteStub;
  let router: RouterStub;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent, PaginationHostStubComponent, BootstrapPaginationStubComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);

    hostFixture = TestBed.createComponent(PaginationHostStubComponent);
    hostComponent = hostFixture.componentInstance;

    el = hostFixture.debugElement.query(By.css('app-pagination'));
    component = el.componentInstance;

    hostFixture.detectChanges();
    hostComponent.items = 15;
    hostComponent.perPageOpts = [1, 5, 10];
    hostComponent.perPage = 5;
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should have default page options', () => {
    component.page.should.equal(1);
    component.perPage.should.equal(10);
    component.perPageOpts.should.be.an('array').that.includes.members([10, 20, 50, 100]);
  });
  it('should accept option inputs', () => {
    hostFixture.detectChanges();
    component.items.should.equal(hostComponent.items);
    component.perPageOpts.should.equal(hostComponent.perPageOpts);
    component.perPage.should.equal(hostComponent.perPage);
  });
  it('should display the number of items', () => {
    hostFixture.detectChanges();
    const itemsEl = el.query(By.css('.item-count'));
    itemsEl.nativeElement.textContent.should.equal('15');
  });
  it('should respond to per page change', () => {
    hostFixture.detectChanges();
    const selectEl = el.query(By.css('select'));
    selectEl.triggerEventHandler('change', {target: {value: '10'}});
    hostFixture.detectChanges();
    hostComponent.perPage.should.equal(10);
  });
  it('should change current page if invalid after per page change', () => {
    component.page = 3;
    hostFixture.detectChanges();

    const spy = sinon.spy(component.perPageChanged, 'emit');
    component.selectPerPage('10');
    hostFixture.detectChanges();

    spy.calledWith({perPage: 10, currentPage: 2}).should.equal(true);
    hostComponent.currentPage.should.equal(2);
  });
  it('should show all per page options', () => {
    hostFixture.detectChanges();
    const optEls = el.queryAll(By.css('option'));
    optEls[0].nativeElement.value.should.equal('1');
    optEls[0].nativeElement.textContent.should.equal('1');
    optEls[1].nativeElement.value.should.equal('5');
    optEls[1].nativeElement.textContent.should.equal('5');
    optEls[2].nativeElement.value.should.equal('10');
    optEls[2].nativeElement.textContent.should.equal('10');
    optEls[3].nativeElement.value.should.equal('-1');
    optEls[3].nativeElement.textContent.should.equal('all');
  });
  it('should show current per page option as selected', () => {
    hostFixture.detectChanges();
    const selectEl = el.query(By.css('select'));
    const optEls = el.queryAll(By.css('option'));
    optEls[0].nativeElement.selected.should.equal(false);
    optEls[1].nativeElement.selected.should.equal(true);
    optEls[2].nativeElement.selected.should.equal(false);
    optEls[3].nativeElement.selected.should.equal(false);
    selectEl.triggerEventHandler('change', {target: {value: '1'}});
    hostFixture.detectChanges();
    optEls[0].nativeElement.selected.should.equal(true);
    optEls[1].nativeElement.selected.should.equal(false);
    selectEl.triggerEventHandler('change', {target: {value: '-1'}});
    hostFixture.detectChanges();
    optEls[3].nativeElement.selected.should.equal(true);
  });
  it('should pass data to ngx-bootstrap pagination component', () => {
    hostFixture.detectChanges();
    const pagEl = el.query(By.directive(BootstrapPaginationStubComponent));
    const pagComp = pagEl.componentInstance;
    pagComp.itemsPerPage.should.equal(5);
    pagComp.totalItems.should.equal(15);
    pagComp.maxSize.should.equal(5);
  });
  it('should respond to pageChanged event', () => {
    hostFixture.detectChanges();
    const routerSpy = sinon.spy(router, 'navigate');
    const pagEl = el.query(By.directive(BootstrapPaginationStubComponent));
    pagEl.triggerEventHandler('pageChanged', {page: 3});
    routerSpy.calledWith(['path'], {queryParams: {page: 3}}).should.equal(true);
  });
});

