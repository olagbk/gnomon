import { should } from 'chai';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PostsComponent } from './blog.component';
import { PostsService } from './blog.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postsServiceStub: {
    getAllPosts(): Observable<Array<{}>>
  };

  beforeEach(async(() => {
    postsServiceStub = {
      getAllPosts: () => Observable.of([{title: 'Post title', body: 'Post body'}])
    };
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [{provide: PostsService, useValue: postsServiceStub }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
});
