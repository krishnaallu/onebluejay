import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportAnalyticsComponent } from './default/reportsanalytics.component';

const routes: Routes = [
    {
        path: 'default',
        component: ReportAnalyticsComponent
    },
    {
        path: 'saas',
        component: ReportAnalyticsComponent
    },
    {
        path: 'crypto',
        component: ReportAnalyticsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsAnalyticsRoutingModule {}
