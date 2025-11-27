import { useState, useEffect, useRef } from 'react';
import { LANGUAGES, routes } from '../i18n/ui';

interface LanguageToggleProps {
  currentLang: string;
  currentPath: string;
}

export default function LanguageToggle({ currentLang, currentPath }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = Object.values(LANGUAGES);
  const currentLanguage = LANGUAGES[currentLang as keyof typeof LANGUAGES];

  // Generate the URL for language switching
  const getLanguageUrl = (langCode: string) => {
    const pathParts = currentPath.split('/').filter(Boolean);
    
    // Remove current language from path if it exists
    if (pathParts[0] && pathParts[0] in LANGUAGES) {
      pathParts.shift();
    }

    // Traducir rutas según el idioma
    const currentRoutes = routes[currentLang as keyof typeof routes];
    const targetRoutes = routes[langCode as keyof typeof routes];
    
    // Si la primera parte es una ruta traducible, traducirla
    if (pathParts.length > 0) {
      // Verificar si es una ruta de experiencias
      if (pathParts[0] === currentRoutes.experiencesPath) {
        pathParts[0] = targetRoutes.experiencesPath;
      }
      // Agregar más traducciones de rutas aquí si es necesario
      else if (pathParts[0] === currentRoutes.about) {
        pathParts[0] = targetRoutes.about;
      }
      else if (pathParts[0] === currentRoutes.gallery) {
        pathParts[0] = targetRoutes.gallery;
      }
      else if (pathParts[0] === currentRoutes.contact) {
        pathParts[0] = targetRoutes.contact;
      }
    }

    // For default language (es), don't add language prefix
    if (langCode === 'es') {
      return '/' + pathParts.join('/');
    }

    // For other languages, add language prefix
    return `/${langCode}/${pathParts.join('/')}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <img 
            src={`/flags/${currentLanguage.code}.svg`}
            alt={currentLanguage.name}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={getLanguageUrl(lang.code)}
              className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                lang.code === currentLang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img 
                  src={`/flags/${lang.code}.svg`}
                  alt={lang.name}
                  className="w-full h-auto rounded-sm"
                />
              </div>
              <span className="font-medium">{lang.name}</span>
              {lang.code === currentLang && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
