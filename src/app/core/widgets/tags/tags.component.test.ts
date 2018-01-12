// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// stubs
import { TagsHostStubComponent } from '../../../../test/host.stubs';

// components & pipes
import { TagsComponent } from './tags.component';
import { TagSortPipe } from './sort.pipe';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let hostFixture: ComponentFixture<TagsHostStubComponent>;
  let hostComponent: TagsHostStubComponent;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsComponent, TagsHostStubComponent, TagSortPipe ]
    });
    hostFixture = TestBed.createComponent(TagsHostStubComponent);
    hostComponent = hostFixture.componentInstance;
    hostComponent.tags = [
      {name: '1', count: 1},
      {name: '2', count: 2},
      {name: '3', count: 3},
      {name: '4', count: 5},
      {name: '5', count: 5},
      {name: '6', count: 6}
    ];

    el = hostFixture.debugElement.query(By.css('app-tags'));
    component = el.componentInstance;
    hostFixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should not show all tags if abbr is selected', () => {
    hostComponent.abbr = true;
    hostFixture.detectChanges();
    const tagEls = el.queryAll(By.css('a')).filter(e => !e.properties.hidden);
    tagEls.length.should.equal(component.abbrNumTags);
  });
  it('should sort tags by count', () => {
    const tagEls = el.queryAll(By.css('a'));
    tagEls[0].nativeElement.textContent.should.include('6');
    tagEls[5].nativeElement.textContent.should.include('1');
  });
  it('should set class for active tags', () => {
    const tagEl = el.query(By.css('a'));
    tagEl.classes.selected.should.equal(false);

    hostComponent.selected = true;
    hostFixture.detectChanges();
    tagEl.classes.selected.should.equal(true);
  });
  it('should show tag count if option selected', () => {
    hostComponent.count = true;
    hostFixture.detectChanges();

    const tagEls = el.queryAll(By.css('a'));
    tagEls[0].query(By.css('span')).nativeElement.textContent.should.include('6');

    hostComponent.count = false;
    hostFixture.detectChanges();
    should().not.exist(tagEls[0].query(By.css('span')));
  });
  it('should respond to select event', () => {
    const spy = sinon.spy(hostComponent, 'selectTag');
    const tagEl = el.query(By.css('a'));
    const selectedTag = {name: '6', count: 6};
    tagEl.triggerEventHandler('click', selectedTag);
    spy.calledWith(selectedTag).should.equal(true);
  });
});
