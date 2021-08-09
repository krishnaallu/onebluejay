import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultAnalyticsComponent } from './default/analytics.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultAnalyticsComponent
    },
    {
        path: 'saas',
        component: DefaultAnalyticsComponent
    },
    {
        path: 'crypto',
        component: DefaultAnalyticsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
