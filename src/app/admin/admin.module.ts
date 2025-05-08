import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { CurrencyFormComponent } from './currency/currency-form/currency-form.component';
import { SettingsListComponent } from './settings/settings-list/settings-list.component';
import { SettingsEditFormComponent } from './settings/settings-edit-form/settings-edit-form.component';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    CurrencyListComponent,
    CurrencyFormComponent,
    SettingsListComponent,
    SettingsEditFormComponent
  ],
  imports: [
   

    RouterModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
