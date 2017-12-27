/* tslint:disable:no-unused-expression */
import { should } from 'chai';
import { ActivatedRoute, Router } from '@angular/router';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { By } from '@angular/platform-browser';
import { PaginationHostStubComponent, RouterStub, ActivatedRouteStub } from '../../../../test/stubs';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let hostFixture: ComponentFixture<PaginationHostStubComponent>
  let hostComponent: PaginationHostStubComponent;
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let activatedRoute: ActivatedRouteStub;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent, PaginationHostStubComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    activatedRoute = TestBed.get(ActivatedRoute);
    hostFixture = TestBed.createComponent(PaginationHostStubComponent);
    hostComponent = hostFixture.componentInstance;
    el = hostFixture.debugElement.query(By.css('app-pagination'));
    component = el.componentInstance;
    // fixture = TestBed.createComponent(PaginationComponent);
    // component = fixture.componentInstance;
    hostFixture.detectChanges();
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
    hostComponent.items = [1, 2, 3, 4, 5];
    hostComponent.perPageOpts = [1, 5, 10];
    hostComponent.perPage = 5;
    hostFixture.detectChanges();
    component.items.should.equal(hostComponent.items);
    component.perPageOpts.should.equal(hostComponent.perPageOpts);
    component.perPage.should.equal(hostComponent.perPage);
  });
});

