import { useEffect, useRef } from 'react';
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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (isAdmin) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        window.__lenis = null;
        document.documentElement.classList.remove('lenis', 'lenis-smooth');
      }
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sync Lenis on resize
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    
    resizeObserver.observe(document.body);

    // Initial position sync for first load (route changes are handled in ScrollToTop).
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, [isAdmin]);

  // Extra sync on route change
  useEffect(() => {
    if (lenisRef.current) {
      // Small delay to allow react to render new route content
      const timer = setTimeout(() => {
        lenisRef.current?.resize();

        // If route has a hash, smoothly scroll to that section.
        if (location.hash) {
          const target = document.getElementById(location.hash.slice(1));
          if (target) {
            lenisRef.current?.scrollTo(target, {
              duration: 1,
            });
          }
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return null;
}
