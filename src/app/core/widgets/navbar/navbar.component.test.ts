/* tslint:disable:no-unused-expression */

// testing tools
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// stubs
import { RouterLinkStubDirective } from '../../../../test/routing.stubs';
import { AuthServiceStub } from '../../../../test/service.stubs';

// dependencies
import { AuthService } from '../../auth.service';

// components
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, RouterLinkStubDirective ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [{ provide: AuthService, useClass: AuthServiceStub } ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should wire links to routes', () => {
    component.isAdmin = true;
    fixture.detectChanges();
    const linkEls = fixture.debugElement.queryAll(By.css('a'));

    const homeEl = linkEls[0];
    const homeD = homeEl.injector.get(RouterLinkStubDirective);
    homeEl.triggerEventHandler('click', null);
    homeD.navigatedTo.should.equal('/home');

    const blogEl = linkEls[1];
    const blogD = blogEl.injector.get(RouterLinkStubDirective);
    blogEl.triggerEventHandler('click', null);
    blogD.navigatedTo.should.equal('/blog');

    const drawEl = linkEls[2];
    const drawD = drawEl.injector.get(RouterLinkStubDirective);
    drawEl.triggerEventHandler('click', null);
    drawD.navigatedTo.should.equal('/drawings');

    const sketchEl = linkEls[3];
    const sketchD = sketchEl.injector.get(RouterLinkStubDirective);
    sketchEl.triggerEventHandler('click', null);
    sketchD.navigatedTo.should.equal('/sketches');

    const photoEl = linkEls[4];
    const photoD = photoEl.injector.get(RouterLinkStubDirective);
    photoEl.triggerEventHandler('click', null);
    photoD.navigatedTo.should.equal('/photos');

    const aboutEl = linkEls[5];
    const aboutD = aboutEl.injector.get(RouterLinkStubDirective);
    aboutEl.triggerEventHandler('click', null);
    aboutD.navigatedTo.should.equal('/about');

    const adminEl = linkEls[6];
    const adminD = adminEl.injector.get(RouterLinkStubDirective);
    adminEl.triggerEventHandler('click', null);
    adminD.navigatedTo.should.equal('/admin');
  });
  it('should configure router to add "active" class to active link', () => {
    const linkEls = fixture.debugElement.queryAll(By.css('a'));
    linkEls.forEach(el => { el.attributes.routerLinkActive.should.equal('active')});
  });
  it('should toggle collapse', () => {
    component.isCollapsed.should.equal(false);

    const toggleEl = fixture.debugElement.query(By.css('button'));
    toggleEl.attributes['data-toggle'].should.equal('collapse');
    toggleEl.attributes['data-target'].should.equal('#navLinks');

    toggleEl.triggerEventHandler('click', null);
    component.isCollapsed.should.equal(true);
    toggleEl.triggerEventHandler('click', null);
    component.isCollapsed.should.equal(false);
  });
  it('should not stay collapsed after navigation', () => {
    const navEl = fixture.debugElement.query(By.css('li'));
    const toggleEl = fixture.debugElement.query(By.css('button'));
    toggleEl.triggerEventHandler('click', null);
    component.isCollapsed.should.equal(true);
    navEl.triggerEventHandler('click', null);
    component.isCollapsed.should.equal(false);
  });
  it('should set isAdmin value', () => {
    localStorage.setItem('token', 'sometoken');
    component.ngOnInit();
    component.isAdmin.should.equal(true);

    localStorage.removeItem('token');
    component.ngOnInit();
    component.isAdmin.should.equal(false);
  });
  it('should respond to loggedIn event change', () => {
    const auth = TestBed.get(AuthService);
    component.isAdmin = false;
    auth.loggedIn.emit(true);
    component.isAdmin.should.equal(true);
    auth.loggedIn.emit(false);
    component.isAdmin.should.equal(false);
  });
  it('should unsubscribe when destroyed', () => {
    const sub = component.loginSubscription;
    sub.closed.should.be.false;
    component.ngOnDestroy();
    sub.closed.should.be.true;
  });
  it('should show admin link only when logged in', () => {
    component.isAdmin = true;
    fixture.detectChanges();
    let linkEl = fixture.debugElement.query(By.css('.admin-link'));
    should().exist(linkEl);

    component.isAdmin = false;
    fixture.detectChanges();
    linkEl = fixture.debugElement.query(By.css('.admin-link'));
    should().not.exist(linkEl);
  });
});
