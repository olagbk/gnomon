import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  maxSize: number;
  page: number;
  @Input() pages: number;

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
    this.router.navigate(this.activatedRoute.snapshot.url.map(segment => segment.path), {queryParams: {page: page}});
  }
}
