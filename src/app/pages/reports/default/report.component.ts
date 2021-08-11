import { Component, OnInit } from '@angular/core';
import { transactions, lineColumAreaChart, revenueColumnChart, customerRadialBarChart, orderRadialBarChart, growthColumnChart} from './data';

import { ChartType } from './report.model';

@Component({
  selector: 'appreport-default',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {

  lineColumAreaChart: ChartType;
  revenueColumnChart: ChartType;
  orderRadialBarChart: ChartType;
  customerRadialBarChart: ChartType;
  growthColumnChart: ChartType;
  transactions;
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    /**
     * Fetches the data
     */
    this.fetchData();
    this.breadCrumbItems = [{ label: 'Report', active: true }];
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    
    this.lineColumAreaChart = lineColumAreaChart;
    this.revenueColumnChart = revenueColumnChart;
    this.orderRadialBarChart = orderRadialBarChart;
    this.customerRadialBarChart = customerRadialBarChart;
    this.growthColumnChart = growthColumnChart;
    
    this.transactions = transactions;
  }

}
