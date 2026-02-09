import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

declare global {
  interface Window {
    __lenis: Lenis | null;
  }
}

export function useSmoothScroll() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdmin) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      if (lenis) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);

    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, [isAdmin]);
}
