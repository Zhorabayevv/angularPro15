import { Component, Input, OnInit } from "@angular/core";

import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input('totalCount') totalProps: number;
  @Input('limitArticles') limitProps: number;
  @Input('url') urlProps: string;
  @Input('currentPage') currentPageProps: number;
  pagesCount: number;
  pages: number[];

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }

}
