import { revealStyle, useReveal } from '../hooks/useReveal';

export default function About() {
  const textRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section id="apropos" className="alt">
      <div className="wrap about-grid">
        <div className="reveal" ref={textRef}>
          <div className="eyebrow"><span className="dot" />À propos</div>
          <h2>Qui suis-<span className="accent">je</span> ?</h2>
          <div className="about-text" style={{ marginTop: '20px' }}>
            <p>
              Je suis <strong>Williams Brou</strong>, développeur web et mobile basé à Abidjan. Je conçois des
              sites et des applications pour les petites structures, indépendants et agences qui ont besoin
              d'outils numériques fiables, sans budget d'agence.
            </p>
            <p>
              Mon approche : <strong>comprendre le besoin</strong>, proposer une solution simple et robuste,
              livrer un produit fonctionnel et maintenable. Je travaille avec React, React Native (Expo),
              TypeScript et PocketBase — des technologies modernes, légères et éprouvées.
            </p>
          </div>
          <ul className="about-list">
            <li><span className="n">01</span>Basé à Abidjan — présentiel ou à distance</li>
            <li><span className="n">02</span>Communication claire, livraisons par étapes validées</li>
            <li><span className="n">03</span>Code propre, documenté, maintenable</li>
            <li><span className="n">04</span>Support après livraison inclus (30 jours)</li>
          </ul>
        </div>
        <div className="hero-card reveal" ref={cardRef} style={revealStyle(150)}>
          <h3>Ce que je cherche <span className="tag">Missions</span></h3>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginBottom: '18px' }}>
            Des missions courtes et ciblées : site vitrine, APK simple, dashboard de gestion. Idéal pour lancer
            un projet rapidement, à coût maîtrisé.
          </p>
          <div className="stat"><span>Langues</span><strong>Français (natif)</strong></div>
          <div className="stat"><span>Disponibilité</span><strong>Immédiate</strong></div>
          <div className="stat"><span>Mode</span><strong>Freelance / mission</strong></div>
          <div className="stat"><span>Contact</span><strong>8illyjean@gmail.com</strong></div>
        </div>
      </div>
    </section>
  );
}
