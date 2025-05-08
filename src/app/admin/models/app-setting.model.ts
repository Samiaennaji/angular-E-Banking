export interface AppSetting {
    key: string;
    value: string | number | boolean | null;
    category: 'application' | 'financier' | 'securite';
    label: string;
    description: string;
  }
  