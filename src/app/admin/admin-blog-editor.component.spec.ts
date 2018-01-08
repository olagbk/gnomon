import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogEditorComponent } from './admin-blog-editor.component';

describe('AdminBlogEditorComponent', () => {
  let component: AdminBlogEditorComponent;
  let fixture: ComponentFixture<AdminBlogEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
