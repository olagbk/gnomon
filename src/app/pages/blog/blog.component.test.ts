import { should } from 'chai';
import { tick, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';
import { BlogServiceStub, ActivatedRouteStub, RouterStub } from '../../../../test/stubs/client';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let activatedRoute: ActivatedRouteStub;
  let blog: BlogServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      providers: [
        { provide: BlogService, useClass: BlogServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    blog = TestBed.get(BlogService);
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.testQueryParams = {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch posts and tags from the server on init', ()  => {
    component.inactiveTags.length.should.equal(3);
    component.filteredPosts.getValue().length.should.equal(4);
  });
  it('should update when user navigates to another page', () => {
    component.filteredPosts = new BehaviorSubject(new Array(100));
    activatedRoute.testQueryParams = {page: 3};
    component.currentPage.should.equal(3);
  });
  it('should unsubscribe when the component is destroyed', () => {
    const tagsSub = component.selectedTags;
    tagsSub.observers.length.should.equal(1);
    fixture.destroy();
    should().not.exist(tagsSub.observers);
  });
  it('should add and delete tags on click', () => {
    const tagEls = fixture.debugElement.queryAll(By.css('app-tags'));
    const activeTagEls = tagEls[0];
    const inactiveTagEls = tagEls[1];
    component.activeTags.length.should.equal(0);
    component.inactiveTags.length.should.equal(3);

    inactiveTagEls.triggerEventHandler('tagSelected', blog.tags[0]);
    component.activeTags.length.should.equal(1);
    component.activeTags[0].should.equal(blog.tags[0]);
    component.inactiveTags.length.should.equal(2);

    activeTagEls.triggerEventHandler('tagSelected', blog.tags[0]);
    component.activeTags.length.should.equal(0);
    component.inactiveTags.length.should.equal(3);
  });
  it('should only show posts with the selected tag', () => {
    const tagsSub = component.selectedTags;
    tagsSub.next([{name: 'tag1', count: 2}]);
    component.filteredPosts.getValue().length.should.equal(2);
  });
  it('should toggle tag stacking when checkbox is clicked', fakeAsync(() => {
    component.addTag(blog.tags[0]);
    component.addTag(blog.tags[1]);
    component.activeTags.length.should.equal(1);

    fixture.detectChanges();
    const stackEl = fixture.debugElement.query(By.css('.stack-tags'));
    const checkboxEl = stackEl.query(By.css('input'));

    checkboxEl.triggerEventHandler('ngModelChange', true);
    component.activeTags.length.should.equal(1);

    component.activeTags = [];
    component.addTag(blog.tags[0]);
    component.addTag(blog.tags[1]);
    component.stackTags.should.equal(true);
    component.activeTags.length.should.equal(2);

    checkboxEl.triggerEventHandler('ngModelChange', false);
    component.stackTags.should.equal(false);
    component.activeTags.length.should.equal(0);
  }));
  it('should show and set tag stacking options', () => {
    let optsEl;
    component.activeTags.push(blog.tags[0]);
    optsEl = fixture.debugElement.query(By.css('.tags-opts'));
    should().not.exist(optsEl);

    component.stackTags = true;
    fixture.detectChanges();
    optsEl = fixture.debugElement.query(By.css('.tags-opts'));
    should().exist(optsEl);

    const linkEls = optsEl.queryAll(By.css('a'));
    const anyEl = linkEls[0];
    const allEl = linkEls[1];

    allEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    allEl.classes.active.should.equal(true);
    anyEl.classes.active.should.not.equal(true);
    component.tagsAllMode.should.equal(true);

    anyEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    anyEl.classes.active.should.equal(true);
    allEl.classes.active.should.not.equal(true);
    component.tagsAllMode.should.equal(false);
  });
  it('should filter posts according to tag stacking option', () => {
    const tags = blog.tags.filter(t => t.name === 'tag1' || t.name === 'tag2');
    const tagsSub = component.selectedTags;
    component.stackTags = true;
    component.activeTags = tags;
    tagsSub.next(tags);
    component.filteredPosts.getValue().length.should.equal(3);

    component.toggleTagMode();
    component.filteredPosts.getValue().length.should.equal(1);
  });
  it('should filter posts if user navigated by clicking on tag on blog post page', fakeAsync(() => {
    activatedRoute.testQueryParams = {tag: 'tag1'};
    component.ngOnInit();
    tick();
    component.activeTags.length.should.equal(1);
    component.filteredPosts.getValue().length.should.equal(2);
  }));
  it('should delete active tags when reset link is clicked', () => {
    component.activeTags = blog.tags;
    fixture.detectChanges();
    const resetEl = fixture.debugElement.query(By.css('.reset'));
    resetEl.triggerEventHandler('click', null);
    component.activeTags.length.should.equal(0);
  });
  it('should show and hide tag search field', () => {
    let searchEl, moreEl, hideEl;
    function setTags() {
      moreEl = fixture.debugElement.query(By.css('.more'));
      hideEl = fixture.debugElement.query(By.css('.hide'));
      searchEl = fixture.debugElement.query(By.css('.tag-search'));
    }
    setTags();
    should().not.exist(searchEl);
    should().not.exist(hideEl);
    should().exist(moreEl);
    component.tagsExpanded.should.equal(false);

    moreEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    setTags();
    should().exist(searchEl);
    should().exist(hideEl);
    should().not.exist(moreEl);
    component.tagsExpanded.should.equal(true);

    hideEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    setTags();
    should().exist(moreEl);
    should().not.exist(hideEl);
    should().not.exist(searchEl);
    component.tagsExpanded.should.equal(false);
  });
  it('should save items per page number in localStorage', fakeAsync(() => {
    localStorage.removeItem('blogPerPage');
    const perPage = 20;
    component.perPageChange({perPage: perPage});
    tick();
    const currentPerPage = localStorage.getItem('blogPerPage');
    component.ngOnInit();

    should().exist(currentPerPage);
    component.perPage.should.equal(perPage);
    Number(currentPerPage).should.equal(perPage);

    localStorage.removeItem('blogPerPage');
    component.ngOnInit();
    component.perPage.should.equal(10);
  }));
  it('should show the right number of posts per page', () => {
    let postEls;
    component.perPage = 3;
    fixture.detectChanges();

    postEls = fixture.debugElement.queryAll(By.css('.post'));
    postEls.length.should.equal(3);

    component.perPage = -1; // show all
    fixture.detectChanges();
    postEls = fixture.debugElement.queryAll(By.css('.post'));
    postEls.length.should.equal(4);
  });

});
