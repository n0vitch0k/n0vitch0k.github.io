import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" ref={progressRef} aria-hidden="true" />
      <nav className="top">
        <div className="wrap inner">
          <a href="#" className="logo">
            <span className="mark">WB</span>
            Williams<span style={{ color: 'var(--orange)' }}>.</span>Brou
          </a>
          <div className={`navlinks${open ? ' open' : ''}`} id="navlinks">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="nav-cta">Me contacter</a>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
}
