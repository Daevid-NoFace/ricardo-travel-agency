import { useState, useEffect } from 'react';

interface LanguageToggleProps {
  currentLang?: string;
}

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function LanguageToggle({ currentLang = 'es' }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(currentLang);

  useEffect(() => {
    // Get language from localStorage or default to Spanish
    const savedLang = localStorage.getItem('language') || 'es';
    setSelectedLang(savedLang);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }));
    
    // Reload page to apply new language
    window.location.reload();
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Cambiar idioma"
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
        <svg 
          className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors ${
                  selectedLang === lang.code ? 'bg-caribbean-blue/10 text-caribbean-blue' : 'text-gray-700'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {selectedLang === lang.code && (
                  <svg className="w-5 h-5 ml-auto text-caribbean-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
