import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';
import { BlogService } from './blog.service';
import { Post, Tag } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  filteredPosts: BehaviorSubject<Post[]>;
  selectedTagsSubject: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  selectedTags: Tag[] = [];
  tagsAllMode = false;

  constructor(private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.blog.getPosts().then(posts => {
      this.filteredPosts = new BehaviorSubject(posts);

      this.selectedTagsSubject.subscribe(tags => {
        this.filteredPosts.next(tags.length === 0
          ? posts
          : posts
            .filter(post => {

              if (this.tagsAllMode) {
                for (const tag of tags) {
                  if ( !post.tags.some(postTag => postTag.name === tag.name) ) { return false; }
                }
                return true;

              } else {
                for (const tag of tags) {
                  if ( post.tags.some(postTag => postTag.name === tag.name) ) { return true; }
                }
              }
          })
        );
      });
    });
  }
  ngOnDestroy() {
    this.filteredPosts.unsubscribe();
    this.selectedTagsSubject.unsubscribe();
  }
  goToPost(id) {
    this.router.navigate(['blog', id]);
  }
  addTag($event) {
    if (this.selectedTags.indexOf($event) !== -1) { return; }
    this.selectedTags.push($event);
    this.selectedTagsSubject.next(this.selectedTags);
  }
  deleteTag($event) {
    this.selectedTags = this.selectedTags.filter(tag => tag !== $event);
    this.selectedTagsSubject.next(this.selectedTags);
  }
  toggleTagMode() {
    this.tagsAllMode = !this.tagsAllMode;
    this.selectedTagsSubject.next(this.selectedTags);
  }
}
