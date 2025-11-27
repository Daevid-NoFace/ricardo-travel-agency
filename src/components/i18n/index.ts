import spanish from './es.json';
import english from './en.json';
import portuguese from './pt.json';

export const translations = {
  Español: 'es',
  English: 'en',
  Português: 'pt',
};

const LANG = {
	PORTUGUESE: 'pt',
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.PORTUGUESE) return {...spanish, ...portuguese};
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};