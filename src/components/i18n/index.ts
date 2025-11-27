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
    case translations.Español:
        return spanish;
    case translations.English:
        return english;
    case translations.Português:
        return portuguese;
    default:
        return spanish;
  }
};