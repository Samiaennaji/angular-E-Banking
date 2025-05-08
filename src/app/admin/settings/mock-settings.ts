import { AppSetting } from '../models/app-setting.model';

export const SETTINGS_DATA: AppSetting[] = [
  // Application
  {
    key: 'maintenance_mode',
    value: false,
    category: 'application',
    label: 'Mode maintenance',
    description: 'Met l’application hors ligne pour maintenance'
  },
  {
    key: 'contact_support_email',
    value: 'support@bank.com',
    category: 'application',
    label: 'Email support',
    description: 'Email du support client'
  },
  {
    key: 'duree_session_admin',
    value: 60,
    category: 'application',
    label: 'Durée session admin (min)',
    description: 'Durée de session pour les admins'
  },
  {
    key: 'duree_session_agent',
    value: 45,
    category: 'application',
    label: 'Durée session agent (min)',
    description: 'Durée de session pour les agents'
  },
  {
    key: 'duree_session_client',
    value: 15,
    category: 'application',
    label: 'Durée session client (min)',
    description: 'Durée de session pour les clients'
  },

  // Financier
  {
    key: 'plafond_virement',
    value: 10000,
    category: 'financier',
    label: 'Plafond virement',
    description: 'Limite max d’un virement'
  },
  {
    key: 'frais_virement_pourcentage',
    value: 2.5,
    category: 'financier',
    label: 'Frais de virement (%)',
    description: 'Frais en % sur chaque virement'
  },
  {
    key: 'plafond_recharge',
    value: 200,
    category: 'financier',
    label: 'Plafond recharge',
    description: 'Limite max d’une recharge téléphonique'
  },

  // Sécurité
  {
    key: 'nb_max_tentatives_connexion',
    value: 5,
    category: 'securite',
    label: 'Max tentatives connexion',
    description: 'Nombre max de tentatives avant blocage'
  },
  {
    key: 'delai_blocage',
    value: 30,
    category: 'securite',
    label: 'Délai blocage (min)',
    description: 'Temps avant déblocage auto du compte'
  },
  {
    key: 'EXPIRY_DATE',
    value: '2025-12-31',
    category: 'securite',
    label: 'Expiration mot de passe',
    description: 'Date d’expiration de mot de passe'
  }
];
