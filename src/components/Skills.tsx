import { useEffect, useRef } from 'react';
import { revealStyle, useReveal } from '../hooks/useReveal';

const GROUPS: { title: string; bars: { label: string; pct: number }[] }[] = [
  {
    title: 'Frontend Web',
    bars: [
      { label: 'React / Vite', pct: 90 },
      { label: 'TypeScript', pct: 85 },
      { label: 'Tailwind CSS', pct: 85 },
      { label: 'Angular', pct: 70 },
    ],
  },
  {
    title: 'Mobile',
    bars: [
      { label: 'React Native / Expo', pct: 85 },
      { label: 'Navigation & UI native', pct: 80 },
      { label: 'Expo modules (SQLite, Print, Image)', pct: 75 },
    ],
  },
  {
    title: 'Backend',
    bars: [
      { label: 'PocketBase', pct: 85 },
      { label: 'Django / DRF', pct: 70 },
      { label: 'Node / Python', pct: 70 },
    ],
  },
  {
    title: 'Outils',
    bars: [
      { label: 'Git / GitHub', pct: 80 },
      { label: 'EAS Build / déploiement', pct: 75 },
      { label: 'Figma / maquettes', pct: 65 },
    ],
  },
];

function SkillBar({ label, pct }: { label: string; pct: number }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.width = `${pct}%`;
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div className="skill-bar">
      <div className="row"><span>{label}</span><span>{pct}%</span></div>
      <div className="track"><div className="fill" ref={fillRef} /></div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal<HTMLDivElement>();
  const g0 = useReveal<HTMLDivElement>();
  const g1 = useReveal<HTMLDivElement>();
  const g2 = useReveal<HTMLDivElement>();
  const g3 = useReveal<HTMLDivElement>();
  const groupRefs = [g0, g1, g2, g3];

  return (
    <section id="competences">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow"><span className="dot" />Stack technique</div>
          <h2>Mes <span className="accent">compétences</span></h2>
          <p className="section-desc">Les technologies que j'utilise au quotidien sur des projets en production.</p>
        </div>
        <div className="skills-wrap">
          {GROUPS.map((group, i) => (
            <div key={group.title} className="skill-group reveal" ref={groupRefs[i]} style={revealStyle(i * 100)}>
              <h4><span className="chip" />{group.title}</h4>
              {group.bars.map((bar) => (
                <SkillBar key={bar.label} label={bar.label} pct={bar.pct} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
