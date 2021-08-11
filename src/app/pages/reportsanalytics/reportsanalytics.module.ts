import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';

import { ReportsAnalyticsRoutingModule } from './reportsanalytics-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

import { SimplebarAngularModule } from 'simplebar-angular';

import { ReportAnalyticsComponent } from './default/reportsanalytics.component';

@NgModule({
  declarations: [ReportAnalyticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsAnalyticsRoutingModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule
  ],
})
export class ReportsAnalyticsModule { }
