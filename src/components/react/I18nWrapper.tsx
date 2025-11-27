import { useState, useEffect, type ReactNode } from 'react';
import { getI18n } from '../i18n';

interface I18nWrapperProps {
  children: (t: any) => ReactNode;
}

export default function I18nWrapper({ children }: I18nWrapperProps) {
  const [currentLang, setCurrentLang] = useState('es');
  const [t, setT] = useState(getI18n({ currentLocale: 'es' }));

  useEffect(() => {
    // Get initial language
    const savedLang = localStorage.getItem('language') || 'es';
    setCurrentLang(savedLang);
    setT(getI18n({ currentLocale: savedLang }));

    // Listen for language changes
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const newLang = customEvent.detail;
      setCurrentLang(newLang);
      setT(getI18n({ currentLocale: newLang }));
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return <>{children(t)}</>;
}
