/* tslint:disable:no-unused-expression */
// testing tools
import { should } from 'chai';
import { SinonSandbox } from 'sinon';
import * as sinon from 'sinon';

// angular imports
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';

// stubs
import { ActivatedRouteStub, RouterStub, RouterLinkStubDirective } from '../../test/routing.stubs';
import { BlogServiceStub } from '../../test/service.stubs';

// dependencies
import { BlogService } from '../core/pages/blog/blog.service';

// models
import { Post } from '../core/pages/blog/post';

// components
import { AdminBlogEditorComponent } from './admin-blog-editor.component';

describe('AdminBlogEditorComponent', () => {
  let component: AdminBlogEditorComponent;
  let fixture: ComponentFixture<AdminBlogEditorComponent>;
  let activatedRoute: ActivatedRouteStub;
  let router: RouterStub;
  let blog: BlogServiceStub;
  let sandbox: SinonSandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    sandbox.restore();

    TestBed.configureTestingModule({
      declarations: [ AdminBlogEditorComponent, RouterLinkStubDirective ],
      providers: [
        {provide: BlogService, useClass: BlogServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        Renderer2
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    blog = TestBed.get(BlogService);
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(AdminBlogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch all tags for lookup', () => {
    component.allTags.should.be.an('array').of.length(3);
    component.allTags[0].should.have.keys('name', 'count');
  });
  it('should clear input value after adding tags', () => {
    const tagEl = {value: 'something'};
    component.addTag(tagEl);
    should().not.exist(tagEl.value);
  });
  it('should trim whitespace around tag', () => {
    const tagEl = {value: '    something   '};
    component.addTag(tagEl);
    component.postTags[0].should.equal('something');
  });
  it('should ignore empty tag submit', () => {
    const tagEl = {value: '  '};
    component.addTag(tagEl);
    component.postTags.should.be.empty;
  });
  it('should skip tag if already exists', () => {
    component.postTags = ['tag1', 'tag2'];
    const tagEl = {value: 'tag2'};
    component.addTag(tagEl);
    component.postTags.length.should.equal(2);
  });
  it('quill img handler should add image el and an empty p to editor', () => {
    const el = document.createElement('div');
    const stub = sinon.stub(window, 'prompt').returns('https://google.com');
    component.addImageElement(el);
    stub.called.should.be.true;
    el.children[0].tagName.should.equal('IMG');
    el.children[0].attributes.getNamedItem('src').nodeValue.should.equal('https://google.com');
    el.children[0].attributes.getNamedItem('vspace').nodeValue.should.equal('10');
    el.children[0].attributes.getNamedItem('width').nodeValue.should.equal('100%');
    el.children[1].tagName.should.equal('P');
  });
  it('should navigate to post list when back button is clicked', () => {
    const el = fixture.debugElement.query(By.directive(RouterLinkStubDirective));
    const routerLink = el.injector.get(RouterLinkStubDirective);
    el.triggerEventHandler('click', null);
    routerLink.navigatedTo.should.equal('../');
  });

  describe('Edit an existing post', () => {

    beforeEach(async(() => {
      activatedRoute.testParams = {id: '1'};
      component.ngOnInit();
    }));

    it('should fetch post w/ tags', () => {
      component.post.should.have.keys('id', 'title', 'body', 'tags', 'createdAt', 'updatedAt');
    });
    it('should parse post tags into strings', () => {
      component.postTags.should.be.an('array').of.length(1);
      component.postTags[0].should.equal('tag1');
    });
    it('should show tags', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const els = fixture.debugElement.queryAll(By.css('.tag'));
        els.length.should.equal(1);
        els[0].nativeElement.innerText.should.include('tag1');
      });
    }));
    it('should add tags to DOM', () => {
      component.postTags = ['1', '2', '3'];
      fixture.detectChanges();
      const els = fixture.debugElement.queryAll(By.css('.tag'));
      els.length.should.equal(3);
    });
    it('should add tags typed into input field', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css('input'));
        const button = fixture.debugElement.query(By.css('button'));

        input.nativeElement.value = 'something';
        button.triggerEventHandler('click', null);
        component.postTags.length.should.equal(2);
        component.postTags.should.include('something');

        input.nativeElement.value = 'another thing';
        input.triggerEventHandler('keyup.enter', null);
        component.postTags.length.should.equal(3);
        component.postTags.should.include('another thing');
      });
    }));
    it('should delete tag', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const el = fixture.debugElement.query(By.css('.close'));
        el.triggerEventHandler('click', 'tag1');
        component.postTags.should.have.length(0);
      });
    }));
    it('should save post when save button is clicked', () => {
      const spy = sandbox.spy(blog, 'editPost');
      const els = fixture.debugElement.queryAll(By.css('a'));
      const el = els[1];
      component.post = blog.posts[0];
      el.triggerEventHandler('click', null);
      spy.calledWith(blog.posts[0], ['tag1']).should.be.true;
    });
    it('should pass post and tags to service method', () => {
      const spy = sandbox.spy(blog, 'editPost');
      component.savePost();
      spy.calledWith(component.post, component.postTags).should.be.true;
    });
    it('should alert and not save when title is empty', () => {
      const alertSpy = sandbox.spy(window, 'alert');
      const saveSpy = sandbox.spy(blog, 'editPost');
      component.post.title = '   ';
      component.savePost();
      saveSpy.called.should.be.false;
      alertSpy.calledOnce.should.be.true;
      alertSpy.lastCall.args[0].should.include('required');
    });
    it('should alert and stay on page if save fails', async(() => {
      const routerSpy = sandbox.spy(router, 'navigate');
      const alertSpy = sandbox.spy(window, 'alert');
      component.post.id = 'error';
      component.savePost();

      fixture.whenStable().catch(() => {
        alertSpy.calledWith('error').should.be.true;
        routerSpy.called.should.be.false;
      });
    }));
    it('should navigate to post list after save', async(() => {
      const spy = sandbox.spy(router, 'navigate');
      component.savePost();
      fixture.whenStable().then(() => {
        spy.calledWith(['../']).should.be.true;
      });
    }));
  });

  describe('Add a new post', () => {

    beforeEach(async(() => {
      activatedRoute.testParams = {id: 'new'};
      component.ngOnInit();
    }));

    it('should create a new post', () => {
      component.post.should.have.keys('title', 'body');
    });
    it('should save post when save button is clicked', () => {
      const spy = sandbox.spy(blog, 'createPost');
      const els = fixture.debugElement.queryAll(By.css('a'));
      const el = els[1];
      const post = new Post('title', 'body');
      component.post = post;
      component.postTags = ['tag1'];
      el.triggerEventHandler('click', null);
      spy.calledWith(post, ['tag1']).should.be.true;
    });
    it('should pass post and tags to service method', () => {
      const spy = sandbox.spy(blog, 'createPost');
      component.post = new Post('title', 'body');
      component.postTags = ['tag1'];
      component.savePost();
      spy.calledWith(component.post, component.postTags).should.be.true;
    });
    it('should alert and stay on page if save fails', async(() => {
      const routerSpy = sandbox.spy(router, 'navigate');
      const alertSpy = sandbox.spy(window, 'alert');
      component.post = new Post('title', 'body');
      component.post.id = 'error';
      component.savePost();

      fixture.whenStable().catch(() => {
        alertSpy.calledWith('error').should.be.true;
        routerSpy.called.should.be.false;
      });
    }));
    it('should navigate to post list after save', async(() => {
      component.post = new Post('title', 'body');
      const spy = sandbox.spy(router, 'navigate');
      component.savePost();
      fixture.whenStable().then(() => {
        spy.calledWith(['../']).should.be.true;
      });
    }));
  });
});
