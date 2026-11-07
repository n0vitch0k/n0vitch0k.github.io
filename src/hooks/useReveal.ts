import { useEffect, useRef, type CSSProperties } from 'react';

/** Style inline pour échelonner la révélation (transition-delay) */
export function revealStyle(delay = 0): CSSProperties {
  return { '--d': `${delay}ms` } as CSSProperties;
}

/**
 * Ajoute la classe .visible quand l'élément entre dans le viewport
 * (animation de révélation au scroll).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
