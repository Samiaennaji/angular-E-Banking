import { Component,OnInit } from '@angular/core';
import { AppSetting } from '../models/app-setting.model';
import { CURRENCY_DATA } from '../currency/mock-currencies'; // optionnel si données mockées
import { SETTINGS_DATA } from '../settings/mock-settings'; // idem


@Component({
  selector: 'app-admin-dashboard',
  standalone:false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  stats = {
    totalCurrencies: 0,
    totalSettings: 0,
    lastUpdate: ''
  };
  
  ngOnInit() {
    // Remplace par une API plus tard
    this.stats.totalCurrencies = CURRENCY_DATA.length;
    this.stats.totalSettings = SETTINGS_DATA.length;
    this.stats.lastUpdate = new Date().toISOString().split('T')[0];
  }
}
