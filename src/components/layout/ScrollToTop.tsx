import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Sync with Lenis if available
    const win = window as Window & { __lenis?: { scrollTo: (y: number, opts?: { immediate?: boolean }) => void } };
    const lenis = win.__lenis;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
