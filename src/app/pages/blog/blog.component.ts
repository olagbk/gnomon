import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  activeTags: Tag[] = [];
  inactiveTags: Tag[];
  searchedTag: string;
  tagsAllMode = false;
  tagsExpanded = false;
  currentPage = 1;
  perPage: number;
  perPageOpts = [5, 10, 20, 50];

  constructor(private blog: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.perPage = (localStorage && localStorage.getItem('blogPerPage')) ? Number(localStorage.getItem('blogPerPage')) : 10;

  }

  ngOnInit(): void {
    this.getTags();
    this.getPosts();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.page) {this.currentPage = params.page; }
    });
  }
  ngOnDestroy(): void {
    this.selectedTags.unsubscribe();
    this.filteredPosts.unsubscribe();
  }
  getPosts(): void {
    this.blog.getPosts({params: {tags: true}}).then(posts => {
      this.filteredPosts = new BehaviorSubject(posts);

      this.selectedTags.subscribe(tags => {
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
  getTags(): void {
    this.blog.getTags().then(tags => {
      this.inactiveTags = tags;
      const queriedTagName = this.activatedRoute.snapshot.queryParams.tag;
      if (queriedTagName) {
        const queriedTag = tags.find(t => t.name = queriedTagName);
        if (!queriedTag) {return;}
        this.addTag(queriedTag);
      }
    });
  }
  addSearchedTag($event): void {
    this.searchedTag = null;
    this.addTag($event.item);
  }
  addTag($event): void {
    if ( this.activeTags.some(tag => tag.name === $event.name) ) { return; }
    this.activeTags.push($event);
    this.inactiveTags = this.inactiveTags.filter(tag => tag.name !== $event.name);
    this.selectedTags.next(this.activeTags);
  }
  deleteTag($event): void {
    this.activeTags = this.activeTags.filter(tag => tag.name !== $event.name);
    this.inactiveTags.push($event);
    this.selectedTags.next(this.activeTags);
  }
  deleteAllTags(): void {
    this.inactiveTags = this.inactiveTags.concat(this.activeTags);
    this.activeTags = [];
    this.selectedTags.next(this.activeTags);
  }
  toggleTagMode(): void {
    this.tagsAllMode = !this.tagsAllMode;
    this.selectedTags.next(this.activeTags);
  }
  goToPost(id): void {
    this.router.navigate(['blog', id]);
  }
  perPageChange(response: any) {
    if (localStorage) { localStorage.setItem('blogPerPage', String(response.perPage)); }
    this.perPage = response.perPage;
    if (response.currentPage) { this.currentPage = response.currentPage; }
  }
}
