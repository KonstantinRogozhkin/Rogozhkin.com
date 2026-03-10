export type Language = 'en' | 'ru';

export interface LocaleState {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
} 