import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      const scrollSmoother = (window as any).__scrollSmoother;

      if (scrollSmoother) {
        scrollSmoother.scrollTop(0, { duration: 0.6, ease: 'power2.out' }); 
      } else {
        // Smooth scroll to top with better performance
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior
        });
      }
    });
  }, [pathname]);

  return null;
}
