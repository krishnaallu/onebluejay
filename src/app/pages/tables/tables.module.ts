import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { AdvancedSortableDirective } from './advancedtable/advanced-sortable.directive';
import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { BillingSortableDirective } from './billingtable/billingtable-sortable.directive';
import { BillingtableComponent } from './billingtable/billingtable.component';
import { InsuranceSortableDirective } from './insurancetable/insurancetable-sortable.directive';
import { InsurancetableComponent } from './insurancetable/insurancetable.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BasicComponent, AdvancedtableComponent, AdvancedSortableDirective,BillingSortableDirective,BillingtableComponent,InsuranceSortableDirective,InsurancetableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule
  ]
})
export class TablesModule { }
