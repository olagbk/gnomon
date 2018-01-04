import { should } from 'chai';
import * as sinon from 'sinon';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub, BlogServiceStub, RouterStub, RouterLinkStubDirective } from '../../../../test/stubs/client';
import { BlogService } from './blog.service';
import { BlogEntryComponent } from './blog-entry.component';

describe('BlogEntryComponent', () => {
  let component: BlogEntryComponent;
  let fixture: ComponentFixture<BlogEntryComponent>;
  let activatedRoute: ActivatedRouteStub;
  let router: RouterStub;
  let blog: BlogServiceStub;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogEntryComponent, RouterLinkStubDirective],
      providers: [
        {provide: BlogService, useClass: BlogServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    blog = TestBed.get(BlogService);
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.testParams = {id: '1'};

    fixture = TestBed.createComponent(BlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  }
  ));

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch the requested post', () => {
    should().exist(component.post);
    component.post.id.should.equal('1');
  });
  it('should fetch recent posts', fakeAsync(() => {
    component.recentPosts.then((posts => posts.length.should.equal(4)));
  }));
  it('should navigate to blog page when requested post does not exist', fakeAsync(() => {
    const routerSpy = sinon.spy(router, 'navigate');
    activatedRoute.testParams = {id: '10'};
    tick();
    should().not.exist(component.post);
    routerSpy.calledWith(['blog']).should.equal(true);
  }));
  it('should navigate to blog page when user clicks on a tag', fakeAsync(() => {
    const routerSpy = sinon.spy(router, 'navigate');
    const tagsEl = fixture.debugElement.query(By.css('app-tags'));
    tagsEl.triggerEventHandler('tagSelected', blog.tags[0]);
    routerSpy.calledWith(['blog'], {queryParams: {tag: blog.tags[0].name}}).should.equal(true);
  }));
  it('should navigate to blog page when user clicks back', fakeAsync(() => {
    const backEls = fixture.debugElement.queryAll(By.css('.back'));
    const backDs = backEls.map(el => el.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    should().not.exist(backDs[0].navigatedTo);
    should().not.exist(backDs[1].navigatedTo);

    backEls[0].triggerEventHandler('click', null);
    backDs[0].navigatedTo.should.equal('/blog');
    backEls[1].triggerEventHandler('click', null);
    backDs[1].navigatedTo.should.equal('/blog');
  }));
  it('should navigate to selected recent post', () => {
    fixture.detectChanges();

    const postEl = fixture.debugElement.query(By.css('.recent-post'));
    const postTitleEl = postEl.query(By.css('.recent-title'));
    const post = blog.posts.find(p => p.title === postTitleEl.nativeElement.textContent);
    const postD = postEl.injector.get(RouterLinkStubDirective);

    postEl.triggerEventHandler('click', null);
    postD.navigatedTo.should.equal(`/blog/${post.id}`);
  });
  it('should show creation date in long format', () => {
    const dateEl = fixture.debugElement.query(By.css('.created-at'));
    dateEl.nativeElement.textContent.should.equal('November 25, 2017');
  });
  it('should show update date only if edited', fakeAsync(() => {
    let dateEl;
    dateEl = fixture.debugElement.query(By.css('.updated-at'));
    should().not.exist(dateEl);

    activatedRoute.testParams = {id: '2'};
    tick();
    fixture.detectChanges();
    dateEl = fixture.debugElement.query(By.css('.updated-at'));
    dateEl.nativeElement.textContent.should.include('November 26, 2017');
  }));
});
