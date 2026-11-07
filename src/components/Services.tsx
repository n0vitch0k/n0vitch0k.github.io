import { revealStyle, useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Site vitrine',
    text: 'Site professionnel responsive, optimisé mobile, formulaire de contact, SEO de base.',
    price: '50 000',
    unit: 'FCFA',
    items: ['1 à 5 pages', 'Design responsive', 'Formulaire de contact', 'Hébergement conseillé'],
    featured: false,
  },
  {
    icon: '📱',
    title: 'Application mobile',
    text: 'App Android native via Expo / React Native, installable directement sur téléphone.',
    price: '50 000',
    unit: 'FCFA',
    items: [
      'APK Android livré',
      'Interface native fluide',
      'Stockage local ou cloud',
      'Publication Play Store en option',
    ],
    featured: true,
  },
  {
    icon: '⚙️',
    title: 'Sur mesure',
    text: 'Fonctionnalités complexes : dashboard, gestion de données, authentification, API.',
    price: 'Sur devis',
    unit: 'selon besoin',
    items: ['Dashboard & admin', 'Base de données', 'Authentification', 'Intégrations API'],
    featured: false,
  },
];

export default function Services() {
  const headRef = useReveal<HTMLDivElement>();
  const card0 = useReveal<HTMLDivElement>();
  const card1 = useReveal<HTMLDivElement>();
  const card2 = useReveal<HTMLDivElement>();
  const cardRefs = [card0, card1, card2];

  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow"><span className="dot" />Services &amp; tarifs</div>
          <h2>Ce que je <span className="accent">propose</span></h2>
          <p className="section-desc">
            Des solutions sur mesure, adaptées à votre besoin et à votre budget. Le tarif dépend de la
            complexité — on discute toujours avant de commencer.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              ref={cardRefs[i]}
              className={`service-card reveal${s.featured ? ' featured' : ''}`}
              style={revealStyle(i * 120)}
            >
              {s.featured && <div className="featured-tag">Populaire</div>}
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="price">{s.price} <small>{s.unit}</small></div>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
