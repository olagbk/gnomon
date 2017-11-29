import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  maxSize: number;
  page: number;
  @Input() items: number;
  @Input() perPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.maxSize = 5;
  }

  ngOnInit(): void {
    this.page = Number(this.activatedRoute.snapshot.queryParams.page) || 1;
    this.goToPage(this.page);
  }

  pageChanged(event: any): void {
    this.goToPage(event.page);
  }

  goToPage(page) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams.page = page;
    this.router.navigate(this.activatedRoute.snapshot.url.map(segment => segment.path), {queryParams: queryParams});
  }
}
