import { revealStyle, useReveal } from '../hooks/useReveal';

export default function Hero() {
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow"><span className="dot" />Développeur Web &amp; Mobile — Abidjan</div>
          <h1>
            Chaque projet est <span className="accent-orange">unique</span> — la solution est toujours{' '}
            <span className="accent-royal">sur mesure</span>.
          </h1>
          <p className="lead">
            Sites vitrines, applications Android, dashboards de gestion — du plus simple au plus complexe,{' '}
            <strong>livrés clés en main</strong>, à des tarifs accessibles pour les petites structures et les
            indépendants.
          </p>
          <div className="price-chip">
            <span style={{ fontSize: '1.4rem' }}>⚡</span>
            <span>
              À partir de<br />
              <strong>50 000 FCFA</strong>
              <small>Site ou APK simple</small>
            </span>
          </div>
          <div className="hero-actions">
            <a href="#projets" className="btn btn-primary">Voir mes projets <span className="arrow">→</span></a>
            <a href="#contact" className="btn btn-ghost">Demander un devis</a>
          </div>
        </div>
        <div className="hero-card reveal" ref={cardRef} style={revealStyle(0)}>
          <div className="floating-badge"><span className="check">✓</span>Livré &amp; en production</div>
          <h3>En bref <span className="tag">Freelance</span></h3>
          <div className="stat"><span>Localisation</span><strong>Abidjan, Côte d'Ivoire</strong></div>
          <div className="stat"><span>Spécialités</span><strong>React · React Native · TypeScript</strong></div>
          <div className="stat"><span>Backend</span><strong>PocketBase · Django · Node</strong></div>
          <div className="stat"><span>Livraison</span><strong>Site ou APK fonctionnel</strong></div>
          <div className="stat"><span>Délai type</span><strong>1 à 3 semaines</strong></div>
          <div className="stat"><span>Tarif d'entrée</span><strong>50 000 FCFA</strong></div>
        </div>
      </div>
    </header>
  );
}
