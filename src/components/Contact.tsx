import { useState, type FormEvent } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow"><span className="dot" />Contact</div>
          <h2>Travaillons <span className="accent">ensemble</span></h2>
        </div>
        <div className="contact-card reveal" ref={cardRef}>
          <div className="contact-info">
            <h3>Une idée de projet ?</h3>
            <p>Décrivez-moi votre besoin, je vous réponds sous 24h avec une estimation et un planning.</p>
            <div className="contact-item"><div className="ico">✉</div><span>8illyjean@gmail.com</span></div>
            <div className="contact-item"><div className="ico">📱</div><span>WhatsApp : +225 05 95 70 28 23</span></div>
            <div className="contact-item"><div className="ico">🐙</div><span>github.com/n0vitch0k</span></div>
            <div className="contact-item"><div className="ico">📍</div><span>Abidjan, Côte d'Ivoire</span></div>
          </div>
          {sent ? (
            <p style={{ alignSelf: 'center', color: 'var(--royal-deep)', fontWeight: 600 }}>
              Merci ! Message bien reçu (démo) — je vous réponds sous 24h. Pour une vraie demande, écrivez-moi
              directement sur WhatsApp ou par email.
            </p>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <input type="text" placeholder="Votre nom" required aria-label="Votre nom" />
              <input type="email" placeholder="Votre email" required aria-label="Votre email" />
              <input type="text" placeholder="Type de projet (site, APK, sur mesure)" aria-label="Type de projet" />
              <textarea placeholder="Décrivez votre besoin..." required aria-label="Votre besoin" />
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Envoyer la demande <span className="arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
