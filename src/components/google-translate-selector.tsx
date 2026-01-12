import { useEffect, useState, useRef } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'हिन्दी', native: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা', native: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்', native: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు', native: 'తెలుగు' },
  { code: 'ml', label: 'മലയാളം', native: 'മലയാളം' },
  { code: 'kn', label: 'ಕನ್ನಡ', native: 'ಕನ್ನಡ' },
  { code: 'mr', label: 'मराठी', native: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી', native: 'ગુજરાતી' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', native: 'ਪੰਜਾਬੀ' },
  { code: 'ur', label: 'اُردو', native: 'اُردو' },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export function GoogleTranslateSelector() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const initAttempted = useRef(false);

  useEffect(() => {
    // Get saved language from cookie
    const savedLang = getCookie('googtrans');
    if (savedLang) {
      const langCode = savedLang.split('/').pop()?.split('-').pop() || 'en';
      setSelectedLang(langCode === 'en' ? 'en' : langCode);
    }

    // Wait for Google Translate to initialize
    const initializeTranslate = () => {
      if (window.google && window.google.translate && !initAttempted.current) {
        initAttempted.current = true;

        const translateElement = document.getElementById('google_translate_element');
        if (translateElement && translateElement.children.length === 0) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: LANGUAGES.map(l => l.code).join(','),
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              'google_translate_element'
            );

            // Wait for combo box to be created
            setTimeout(() => {
              const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
              if (combo) {
                const currentLang = combo.value || 'en';
                setSelectedLang(currentLang === 'en' ? 'en' : currentLang);

                // Listen for language changes
                combo.addEventListener('change', (e) => {
                  const target = e.target as HTMLSelectElement;
                  const lang = target.value || 'en';
                  setSelectedLang(lang === 'en' ? 'en' : lang);
                });
              }
            }, 500);
          } catch (error) {
            console.error('Error initializing Google Translate:', error);
          }
        }
        return true;
      }
      return false;
    };

    // Check immediately
    if (initializeTranslate()) {
      return;
    }

    // If not ready, check periodically
    const interval = setInterval(() => {
      if (initializeTranslate()) {
        clearInterval(interval);
      }
    }, 200);

    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Set cookie for Google Translate
    if (langCode === 'en') {
      setCookie('googtrans', '');
      // Reload page to show English
      window.location.reload();
      return;
    }

    // Set the translation cookie
    setCookie('googtrans', `/en/${langCode}`);

    // Trigger translation using multiple methods
    setTimeout(() => {
      // Method 1: Use the combo box if available
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (combo) {
        combo.value = langCode;
        const event = new Event('change', { bubbles: true, cancelable: true });
        combo.dispatchEvent(event);
      }

      // Method 2: Trigger via iframe if available
      const frame = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
      if (frame && frame.contentWindow) {
        try {
          const iframeDoc = frame.contentDocument || frame.contentWindow.document;
          const iframeCombo = iframeDoc.querySelector('select') as HTMLSelectElement;
          if (iframeCombo) {
            iframeCombo.value = langCode;
            iframeCombo.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } catch (e) {
          // Cross-origin restriction, ignore
        }
      }

      // Method 3: Reload page to apply translation
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }, 100);
  };

  // Helper functions for cookies
  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const currentLanguage = LANGUAGES.find(lang => lang.code === selectedLang) || LANGUAGES[0];

  return (
    <>
      {/* Google Translate element - must be visible for it to work */}
      <div
        id="google_translate_element"
        className="google-translate-wrapper"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      />

      {/* Custom Language Selector */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center gap-2 px-3 min-h-11 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 dark:border-slate-700 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30"
          >
            <Languages className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide font-montreal">
              {currentLanguage.code}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="max-h-[60vh] overflow-y-auto scrollbar-thin min-w-[160px]"
          onWheel={(e) => e.stopPropagation()}
          onScroll={(e) => e.stopPropagation()}
          style={{ overscrollBehavior: 'contain' }}
        >
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`font-gotham cursor-pointer ${selectedLang === lang.code ? 'bg-emerald-50 dark:bg-emerald-950/30' : ''
                }`}
            >
              <div className="flex flex-col">
                <span className="font-semibold">{lang.native}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{lang.label}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
