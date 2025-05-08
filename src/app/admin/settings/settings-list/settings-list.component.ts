import { Component } from '@angular/core';
import { AppSetting } from '../../models/app-setting.model';
import { SETTINGS_DATA } from '../mock-settings';

@Component({
  selector: 'app-settings-list',
  standalone: false,
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent {
  settings: AppSetting[] = [...SETTINGS_DATA];

  selectedSetting: AppSetting | null = null;

  get applicationSettings() {
    return this.settings.filter(s => s.category === 'application');
  }

  get financierSettings() {
    return this.settings.filter(s => s.category === 'financier');
  }

  get securiteSettings() {
    return this.settings.filter(s => s.category === 'securite');
  }

  edit(setting: AppSetting) {
    this.selectedSetting = { ...setting };
  }

  saveEdited(setting: AppSetting) {
    const index = this.settings.findIndex(s => s.key === setting.key);
    if (index !== -1) {
      this.settings[index].value = setting.value;
    }
    this.selectedSetting = null;
  }

  cancelEdit() {
    this.selectedSetting = null;
  }
}
