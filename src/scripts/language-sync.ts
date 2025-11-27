// Sync language between localStorage and cookies
export function syncLanguage() {
  if (typeof window === 'undefined') return;
  
  const savedLang = localStorage.getItem('language') || 'es';
  
  // Set cookie for server-side rendering
  document.cookie = `language=${savedLang}; path=/; max-age=31536000`; // 1 year
}

// Initialize on page load
if (typeof window !== 'undefined') {
  syncLanguage();
  
  // Listen for language changes
  window.addEventListener('languageChange', (e: Event) => {
    const customEvent = e as CustomEvent;
    const newLang = customEvent.detail;
    document.cookie = `language=${newLang}; path=/; max-age=31536000`;
  });
}
