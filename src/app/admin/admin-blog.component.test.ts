/* tslint:disable:no-unused-expression */

// testing tools
import * as sinon from 'sinon';
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// stubs
import { BsModalServiceStub } from '../../test/third-party.stubs';
import { BlogServiceStub } from '../../test/service.stubs';

// dependencies
import { BsModalService } from 'ngx-bootstrap';
import { BlogService } from '../core/pages/blog/blog.service';

// components
import { AdminBlogComponent } from './admin-blog.component';

// models
import { Post } from '../core/pages/blog/post';

describe('AdminBlogComponent', () => {
  let component: AdminBlogComponent;
  let fixture: ComponentFixture<AdminBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogComponent ],
      providers: [{
        provide: BlogService, useClass: BlogServiceStub
      }, {
        provide: BsModalService, useClass: BsModalServiceStub
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(AdminBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch posts', () => {
    component.posts.should.be.an('array').of.length(4);
  });
  it('should display all posts', () => {
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('.post'));
    els.length.should.equal(4);
  });
  it('should open modal when delete button is clicked', () => {
    fixture.detectChanges();

    const spy = sinon.spy(component, 'openModal');
    const postEl = fixture.debugElement.query(By.css('.post'));
    const deleteEl = postEl.query(By.css('.delete'));

    deleteEl.triggerEventHandler('click', null);

    spy.calledWith(component.posts[0]).should.be.true;
    should().exist(component.modalRef);

  });
  it('should update UI while post is being deleted', fakeAsync(() => {
    component.openModal(new Post('title'));

    const spy = sinon.spy(component.modalRef, 'hide');

    component.deletePost();
    fixture.detectChanges();
    let spinnerEl = fixture.debugElement.query(By.css('app-spinner-screen'));

    spy.calledOnce.should.be.true;
    component.processing.should.be.true;
    should().exist(spinnerEl);

    tick();
    fixture.detectChanges();
    spinnerEl = fixture.debugElement.query(By.css('app-spinner-screen'));

    component.processing.should.be.false;
    should().not.exist(spinnerEl);
  }));
  it('should leave posts untouched if error', fakeAsync(() => {
    const oldPosts = component.posts.slice(0);

    component.openModal(new Post('title'));
    component.postToDelete.id = 'error';
    component.deletePost();
    tick();
    component.posts.should.deep.equal(oldPosts);
  }));
  it('should remove deleted post from list', fakeAsync(() => {
    const post = component.posts[0];

    component.posts.length.should.equal(4);
    component.openModal(post);
    component.deletePost();
    tick();

    component.posts.length.should.equal(3);
    const deleted = component.posts.find(p => p === post);
    should().not.exist(deleted);


  }));
});
