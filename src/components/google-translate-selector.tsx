import { useEffect, useState, useRef } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'ur', label: 'اُردو' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function GoogleTranslateSelector() {
  const [selected, setSelected] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const initRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || initRef.current) return;

    // Wait for Google Translate to be available (it's loaded in HTML)
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        initRef.current = true;
        initializeTranslate();
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkGoogleTranslate()) {
      return;
    }

    // If not available, wait for it (script is loaded in HTML)
    const interval = setInterval(() => {
      if (checkGoogleTranslate()) {
        clearInterval(interval);
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
      if (!initRef.current) {
        console.warn('Google Translate not available after timeout');
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const initializeTranslate = () => {
    if (!window.google || !window.google.translate) {
      console.error('Google Translate API not available');
      return;
    }

    const translateElement = document.getElementById('google-translate-element');
    if (!translateElement) {
      console.error('Google Translate element not found');
      return;
    }

    // Clear any existing content
    translateElement.innerHTML = '';

    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map((l) => l.code).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google-translate-element'
      );

      // Wait for the combo box to be created
      const checkCombo = () => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
        if (combo) {
          combo.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            setSelected(target.value || 'en');
          });
          setSelected(combo.value || 'en');
          setIsInitialized(true);
          return true;
        }
        return false;
      };

      if (!checkCombo()) {
        const observer = new MutationObserver(() => {
          if (checkCombo()) {
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Timeout fallback
        setTimeout(() => {
          observer.disconnect();
          if (!checkCombo()) {
            console.warn('Google Translate combo box not found after timeout');
          }
        }, 5000);
      }
    } catch (error) {
      console.error('Error initializing Google Translate:', error);
    }
  };

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelect = (code: string) => {
    setSelected(code);
    setIsOpen(false);

    // Wait a bit for dropdown to close, then trigger translation
    setTimeout(() => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

      if (combo) {
        // Set the value
        combo.value = code;

        // Trigger change event with proper event creation
        const event = new Event('change', {
          bubbles: true,
          cancelable: true
        });
        combo.dispatchEvent(event);

        // Also try to trigger translation directly
        try {
          // Use Google Translate's internal API if available
          if (window.google && window.google.translate) {
            const frame = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
            if (frame && frame.contentWindow) {
              // Try to access the translate service
              const translateService = (window.google.translate as any).TranslateService;
              if (translateService) {
                translateService.getInstance().translate('en', code);
              }
            }
          }
        } catch (error) {
          console.log('Translation triggered via combo box change event');
        }
      } else {
        // If combo not found, try to initialize and retry
        if (!isInitialized && window.googleTranslateElementInit) {
          window.googleTranslateElementInit();
          setTimeout(() => {
            const retryCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
            if (retryCombo) {
              retryCombo.value = code;
              const event = new Event('change', { bubbles: true, cancelable: true });
              retryCombo.dispatchEvent(event);
            }
          }, 1000);
        }
      }
    }, 100);
  };

  return (
    <div className="relative">
      <div
        id="google-translate-element"
        className="absolute left-2 top-2 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
        aria-hidden="true"
      />
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="relative inline-flex items-center gap-2 px-3">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="text-xs font-semibold uppercase tracking-wide">{selected}</span>
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="font-gotham cursor-pointer"
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
