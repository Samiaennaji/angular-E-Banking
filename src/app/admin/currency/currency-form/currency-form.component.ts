import { Component, EventEmitter, Input, Output, } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-currency-form',
  standalone:false,
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.css'
})
export class CurrencyFormComponent {
  @Input() formTitle: string = 'Ajouter une devise';
  @Input() currency: any = { name: '', code: '', rate: 1, base: false };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    if (this.currency.name && this.currency.code && this.currency.rate > 0) {
      this.save.emit(this.currency);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
