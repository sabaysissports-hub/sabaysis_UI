import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const existingScript = document.getElementById('google-translate-script');

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map((l) => l.code).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google-translate-element'
      );
      const checkCombo = () => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
        if (combo) {
          combo.addEventListener('change', () => setSelected(combo.value || 'en'));
          setSelected(combo.value || 'en');
          return true;
        }
        return false;
      };
      if (!checkCombo()) {
        const observer = new MutationObserver(() => {
          if (checkCombo()) observer.disconnect();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit?.();
    }
  }, []);

  const handleSelect = (code: string) => {
    const ensureCombo = () => document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    let combo = ensureCombo();
    if (!combo && window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
      combo = ensureCombo();
    }
    if (!combo) {
      setTimeout(() => {
        const retryCombo = ensureCombo();
        if (retryCombo) {
          retryCombo.value = code;
          retryCombo.dispatchEvent(new Event('change', { bubbles: true }));
          retryCombo.dispatchEvent(new Event('input', { bubbles: true }));
          setSelected(code);
        }
      }, 300);
      return;
    }
    combo.value = code;
    combo.dispatchEvent(new Event('change', { bubbles: true }));
    combo.dispatchEvent(new Event('input', { bubbles: true }));
    setSelected(code);
  };

  return (
    <div className="relative">
      <div
        id="google-translate-element"
        className="absolute left-2 top-2 h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="relative inline-flex items-center gap-2 px-3">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="text-xs font-semibold uppercase tracking-wide">{selected}</span>
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem key={lang.code} onClick={() => handleSelect(lang.code)}>
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
