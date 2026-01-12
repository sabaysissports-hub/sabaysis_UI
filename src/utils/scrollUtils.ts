/**
 * Lightweight scroll utility functions using native smooth scrolling.
 * This avoids heavy GSAP dependencies and improves performance.
 */

/**
 * Smoothly scrolls the page so that the element matching `selector`
 * is brought into view.
 *
 * @param selector - CSS selector of the target element
 * @param smooth - Whether to use smooth scrolling (default: true)
 * @param position - Vertical alignment of the element in the viewport (default: 'center')
 */
export function scrollToElement(
  selector: string,
  smooth: boolean = true,
  position: ScrollLogicalPosition = 'center'
): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const element = document.querySelector<HTMLElement>(selector);
  if (!element) return;

  element.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    block: position,
    inline: 'nearest',
  });
}

/**
 * Smoothly scrolls the window to a given vertical position.
 *
 * @param scrollTop - Target scroll Y position in pixels
 * @param smooth - Whether to use smooth scrolling (default: true)
 */
export function scrollToPosition(scrollTop: number, smooth: boolean = true): void {
  if (typeof window === 'undefined') return;

  window.scrollTo({
    top: scrollTop,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

