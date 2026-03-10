import { useTranslation } from 'react-i18next';
import { useLocaleStore } from '../model/store';
import { Language } from '../model/types';

export const useLocale = () => {
  const { t } = useTranslation();
  const { currentLanguage, setLanguage } = useLocaleStore();

  const toggleLanguage = () => {
    const newLang: Language = currentLanguage === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
  };

  return {
    t,
    currentLanguage,
    setLanguage,
    toggleLanguage,
  };
}; 