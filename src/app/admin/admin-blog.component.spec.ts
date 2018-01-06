/* tslint:disable:no-unused-expression */
import * as sinon from 'sinon';
import { should } from 'chai';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalServiceStub, BlogServiceStub } from '../../../test/stubs/client';
import { BlogService } from '../core/pages/blog/blog.service';
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
    component.posts.then(posts => {
      posts.should.be.an('array').of.length(4);
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
      const title = postEl.query(By.css('.link')).nativeElement.textContent;

      deleteEl.triggerEventHandler('click', null);

      spy.calledWith(title).should.be.true;
      should().exist(component.modalRef);
    });
  }));
});
