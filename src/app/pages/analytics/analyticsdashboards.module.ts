import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';

import { DashboardsRoutingModule } from './analyticsdashboards-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultAnalyticsComponent } from './default/analytics.component';

@NgModule({
  declarations: [DefaultAnalyticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UIModule
  ],
})
export class DashboardsModule { }
