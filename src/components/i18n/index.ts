import spanish from './es.json';
import english from './en.json';
import portuguese from './pt.json';

export const translations = {
  Español: 'es',
  English: 'en',
  Português: 'pt',
};

export const getI18n = ({currentLocale}: {currentLocale: string}) => {
  switch (currentLocale) {
    case 'es':
    case translations.Español:
        return spanish;
    case 'en':
    case translations.English:
        return english;
    case 'pt':
    case translations.Português:
        return portuguese;
    default:
        return spanish;
  }
};

export const getCurrentLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'es';
  }
  return 'es';
};