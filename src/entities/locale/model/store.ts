import { create } from 'zustand';
import { Language, LocaleState } from './types';
import i18n from '@/shared/config/i18n/i18n.config';

export const useLocaleStore = create<LocaleState>((set) => ({
  currentLanguage: (localStorage.getItem('i18nextLng') as Language) || 'en',
  
  setLanguage: (lang: Language) => {
    i18n.changeLanguage(lang);
    set({ currentLanguage: lang });
  },
})); 