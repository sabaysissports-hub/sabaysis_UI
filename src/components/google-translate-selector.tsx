import { useEffect, useState, useRef } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  label: string;
}

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

// Hardcoded language list as fallback
const FALLBACK_LANGUAGES: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'it', label: 'Italian' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'ru', label: 'Russian' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'zh-CN', label: 'Chinese (Simplified)' },
  { code: 'zh-TW', label: 'Chinese (Traditional)' },
  { code: 'ar', label: 'Arabic' },
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'kn', label: 'Kannada' },
  { code: 'mr', label: 'Marathi' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'ur', label: 'Urdu' },
  { code: 'th', label: 'Thai' },
  { code: 'vi', label: 'Vietnamese' },
  { code: 'id', label: 'Indonesian' },
  { code: 'ms', label: 'Malay' },
  { code: 'ph', label: 'Filipino' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'pl', label: 'Polish' },
  { code: 'tr', label: 'Turkish' },
];

export function GoogleTranslateSelector() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [languages, setLanguages] = useState<Language[]>(FALLBACK_LANGUAGES);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const initAttempted = useRef(false);
  const fetchAttempt = useRef(0);

  useEffect(() => {
    // Get saved language from cookie
    const savedLang = getCookie('googtrans');
    if (savedLang) {
      // googtrans cookie format: "/en/es" or similar
      const parts = savedLang.split('/');
      const langCode = parts[parts.length - 1] || 'en';
      setSelectedLang(langCode || 'en');
    }

    // Initialize Google Translate and fetch languages
    const fetchLanguages = () => {
      fetchAttempt.current += 1;

      if (window.google && window.google.translate && !initAttempted.current) {
        initAttempted.current = true;

        try {
          // Initialize the translate element
          const translateElement = document.getElementById('google_translate_element');
          if (translateElement) {
            // Clear previous content if any
            translateElement.innerHTML = '';

            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: '',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              'google_translate_element'
            );

            // Fetch languages from the combo box with multiple attempts
            const fetchFromCombo = (attempt = 0) => {
              if (attempt > 30) {
                // After 30 attempts (3 seconds), use fallback
                setLanguages(FALLBACK_LANGUAGES);
                setIsLoading(false);
                return;
              }

              const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
              
              if (combo && combo.options && combo.options.length > 1) {
                // Successfully found the combo with options
                const availableLanguages: Language[] = [];

                for (let i = 0; i < combo.options.length; i++) {
                  const option = combo.options[i] as HTMLOptionElement;
                  const value = option.value?.trim() || '';
                  if (value) {
                    availableLanguages.push({
                      code: value,
                      label: option.textContent?.trim() || value
                    });
                  }
                }

                if (availableLanguages.length > 0) {
                  setLanguages(availableLanguages);
                  
                  // If we have a saved language, update combo
                  const savedLang = getCookie('googtrans');
                  if (savedLang) {
                    const parts = savedLang.split('/');
                    const langCode = parts[parts.length - 1] || 'en';
                    combo.value = langCode || '';
                    const changeEvent = new Event('change', { bubbles: true });
                    combo.dispatchEvent(changeEvent);
                  }
                }

                setIsLoading(false);
              } else {
                // Combo not ready yet, try again
                setTimeout(() => {
                  fetchFromCombo(attempt + 1);
                }, 100);
              }
            };

            // Start fetching from combo box
            fetchFromCombo();
          }
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
          setLanguages(FALLBACK_LANGUAGES);
          setIsLoading(false);
        }

        return true;
      }

      return false;
    };

    // Initial attempt
    if (!fetchLanguages() && fetchAttempt.current < 50) {
      // If Google Translate not ready, retry
      const timeout = setTimeout(() => {
        fetchLanguages();
      }, 100);

      return () => clearTimeout(timeout);
    }

    setIsLoading(false);
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Find and update the Google Translate combo box
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    
    if (!combo) {
      // If combo not found, just use cookie and reload
      if (langCode === 'en') {
        setCookie('googtrans', '');
      } else {
        setCookie('googtrans', `/en/${langCode}`);
      }
      setTimeout(() => window.location.reload(), 100);
      return;
    }

    // Set combo value to trigger Google Translate
    combo.value = langCode === 'en' ? '' : langCode;

    // Trigger change event
    const event = new Event('change', { bubbles: true, cancelable: true });
    combo.dispatchEvent(event);

    // Also dispatch a 'change' event through jQuery if available
    if ((window as any).$ && (window as any).$(combo).trigger) {
      (window as any).$(combo).trigger('change');
    }

    // Set the cookie for persistence
    if (langCode === 'en') {
      setCookie('googtrans', '');
    } else {
      setCookie('googtrans', `/en/${langCode}`);
    }

    // Reload to ensure translation is applied
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  // Helper functions for cookies
  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    if (days === 0) {
      expires.setTime(expires.getTime() - 1);
    } else {
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    }
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLang) || languages[0];

  return (
    <>
      {/* Google Translate element - hidden but required for Google Translate to work */}
      <div
        id="google_translate_element"
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          visibility: 'hidden',
          display: 'none'
        }}
      />

      {/* Custom Language Selector */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center gap-2 px-3 min-h-11 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 dark:border-slate-700 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30"
            disabled={isLoading}
          >
            <Languages className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide font-montreal">
              {currentLanguage?.code || 'EN'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="max-h-[60vh] overflow-y-auto scrollbar-thin min-w-[200px]"
          onWheel={(e) => e.stopPropagation()}
          onScroll={(e) => e.stopPropagation()}
          style={{ overscrollBehavior: 'contain' }}
        >
          {languages && languages.length > 0 ? (
            languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`font-gotham cursor-pointer text-sm ${
                  selectedLang === lang.code 
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 font-semibold' 
                    : ''
                }`}
              >
                <span>{lang.label}</span>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem disabled>
              <span className="text-sm text-slate-500">No languages available</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
