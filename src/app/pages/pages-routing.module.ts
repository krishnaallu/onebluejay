import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditorComponent } from './form/editor/editor.component';
import { AdvancedtableComponent } from './tables/advancedtable/advancedtable.component';
import { BillingtableComponent } from './tables/billingtable/billingtable.component';
import { InsurancetableComponent } from './tables/insurancetable/insurancetable.component';
import { ElementsComponent } from './form/elements/elements.component';
import { ReportComponent } from './reports/default/report.component';
import { ReportAnalyticsComponent } from './reportsanalytics/default/reportsanalytics.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  {path: 'searchPatient', component: AdvancedtableComponent},
  {path: 'addPatient', component: ElementsComponent},
  {path: 'addNotes', component: EditorComponent},
  {path: 'diagnosisProcedure', component: AdvancedtableComponent},
  {path: 'facility', component: AdvancedtableComponent},
  {path: 'insurance', component: InsurancetableComponent},
  {path: 'billing', component: BillingtableComponent},
  {path: 'analytics', component: ReportAnalyticsComponent},
  {path: 'reports', component: ReportComponent},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },  
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },  
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
