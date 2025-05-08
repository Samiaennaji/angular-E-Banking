import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSetting } from '../../models/app-setting.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-edit-form',
  standalone: false,
  templateUrl: './settings-edit-form.component.html',
  styleUrls: ['./settings-edit-form.component.css']
})
export class SettingsEditFormComponent {
  @Input() setting: AppSetting | null = null;
  @Output() save = new EventEmitter<AppSetting>(); // ✅
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    if (this.setting) {
      this.save.emit(this.setting); // ✅ CORRECT
    }
  }
  

  onCancel() {
    this.cancel.emit();
  }

  isBoolean(): boolean {
    return typeof this.setting?.value === 'boolean';
  }

  isNumber(): boolean {
    return typeof this.setting?.value === 'number';
  }

  isDate(): boolean {
    return this.setting?.key.toLowerCase().includes('date') ?? false;
  }
}