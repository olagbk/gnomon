/* tslint:disable:no-unused-expression */

// testing tools
import * as sinon from 'sinon';
import { should } from 'chai';

// angular imports
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
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
  it('should fetch posts', async(() => {
    fixture.whenStable().then(() => {
      component.posts.should.be.an('array').of.length(4);
    });
  }));
  it('should display all posts', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const els = fixture.debugElement.queryAll(By.css('.post'));
      els.length.should.equal(4);
    });
  }));
  it('should open modal when delete button is clicked', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const spy = sinon.spy(component, 'openModal');
      const postEl = fixture.debugElement.query(By.css('.post'));
      const deleteEl = postEl.query(By.css('.delete'));

      deleteEl.triggerEventHandler('click', null);

      spy.calledWith(component.posts[0]).should.be.true;
      should().exist(component.modalRef);
    });
  }));
});
