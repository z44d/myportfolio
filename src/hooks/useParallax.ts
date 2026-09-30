import { useEffect, useRef } from 'react';

/**
 * Parallax scrolling: translates the referenced element vertically at a
 * different rate than the page scroll, relative to its distance from the
 * viewport center. Positive speeds lag behind the scroll (background depth),
 * negative speeds move faster (foreground depth). Works at any scroll
 * position and is disabled when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement>(speed = 0.1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let docTop = 0;
    let height = 0;

    const measure = () => {
      // Reset the transform first so the measured position is the element's
      // natural layout position, unaffected by any previous translation.
      const previous = el.style.transform;
      el.style.transform = 'translate3d(0, 0, 0)';
      const rect = el.getBoundingClientRect();
      docTop = rect.top + window.scrollY;
      height = rect.height;
      el.style.transform = previous;
    };

    const update = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const delta = docTop + height / 2 - viewportCenter;
      el.style.transform = `translate3d(0, ${Math.round(-delta * speed)}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [speed]);

  return ref;
}
