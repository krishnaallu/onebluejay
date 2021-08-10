import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './insurancetable.model';

import { tableData } from './data';

import { InsuranceService } from './insurancetable.service';
import { InsuranceSortableDirective, SortEvent } from './insurancetable-sortable.directive';

@Component({
  selector: 'app-billabletable',
  templateUrl: './insurancetable.component.html',
  styleUrls: ['./insurancetable.component.scss'],
  providers: [InsuranceService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class InsurancetableComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(InsuranceSortableDirective) headers: QueryList<InsuranceSortableDirective>;
  public isCollapsed = true;

  constructor(public service: InsuranceService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [];
    /**
     * fetch data
     */
    this._fetchData();
  }


  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
