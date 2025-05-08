import { Component } from '@angular/core';
import { CURRENCY_DATA } from '../mock-currencies';


@Component({
  selector: 'app-currency-list',
  standalone: false,
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.css'
})
export class CurrencyListComponent {
  currencies = [...CURRENCY_DATA];


  edit(currency: any) {
    console.log('Modifier:', currency);
  }

  delete(code: string) {
    this.currencies = this.currencies.filter(c => c.code !== code);
  }

  isFormVisible = false;
newCurrency = { name: '', code: '', rate: 0, base: false };

showForm() {
  this.newCurrency = { name: '', code: '', rate: 0, base: false };
  this.isFormVisible = true;
}

handleSave(currency: any) {
  this.currencies.push(currency); // ou envoyer à l'API
  this.isFormVisible = false;
}

handleCancel() {
  this.isFormVisible = false;
}

}
