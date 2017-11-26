import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  posts: Post[];
  filteredPosts: BehaviorSubject<Post[]>;
  selectedTagsSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);
  selectedTags: string[] = [];
  tagsAll = false;

  constructor(private blog: BlogService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.blog.getPosts().then(posts => {
      this.posts = posts;
      this.filteredPosts = new BehaviorSubject(posts);

      this.selectedTagsSubject.subscribe(tags => {
        this.filteredPosts.next(tags.length === 0
          ? this.posts
          : this.posts
            .filter(post => {
              const postTagNames = post.tags.map(tag => tag.name);

              if (this.tagsAll) {
                for (const tag of tags) {
                  if (postTagNames.indexOf(tag) === -1) { return false; }
                }
                return true;
              } else {
                for (const tag of tags) {
                  if (postTagNames.indexOf(tag) !== -1) { return true; }
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
    this.tagsAll = !this.tagsAll;
    this.selectedTagsSubject.next(this.selectedTags);
  }
}
