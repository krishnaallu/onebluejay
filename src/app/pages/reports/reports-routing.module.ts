import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './default/report.component';

const routes: Routes = [
    {
        path: 'default',
        component: ReportComponent
    },
    {
        path: 'saas',
        component: ReportComponent
    },
    {
        path: 'crypto',
        component: ReportComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {}
