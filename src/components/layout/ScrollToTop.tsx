import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      return;
    }

    // Sync with Lenis if available
    const win = window as Window & {
      __lenis?: {
        scrollTo: (
          y: number,
          opts?: { immediate?: boolean; duration?: number }
        ) => void;
      };
    };
    const lenis = win.__lenis;

    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
