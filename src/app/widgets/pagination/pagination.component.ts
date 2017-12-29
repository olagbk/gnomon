import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  maxSize: number;
  page: number;
  @Input() items: number;
  @Input() perPage: number;
  @Input() perPageOpts: number[];
  @Output() selected: EventEmitter<any> = new EventEmitter();


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.maxSize = 5;
  }

  ngOnInit(): void {
    this.perPage = this.perPage || 10;
    this.perPageOpts = this.perPageOpts || [10, 20, 50, 100];
    this.page = Math.max(Math.min(Number(this.activatedRoute.snapshot.queryParams.page), Math.ceil(this.items / this.perPage)), 1) || 1;
  }

  pageChanged(event: any): void {
    this.goToPage(event.page);
  }

  goToPage(page: number) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams.page = page;
    this.router.navigate(this.activatedRoute.snapshot.url.map(segment => segment.path), {queryParams: queryParams});
  }
  select(perPage: string) {
    const response: any = {perPage: Number(perPage)};
    const numPages = (perPage === '-1') ? 1 : Math.ceil(this.items / Number(perPage));
    if (numPages < this.page) {
      response.currentPage = Math.ceil(numPages);
    }
    this.selected.emit(response);
  }
}
