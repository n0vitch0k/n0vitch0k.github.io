import { PROJECTS, type Project } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article className="project-detail reveal" ref={ref} id={project.id}>
      <div className="project-detail-header">
        <div>
          <div className="project-tag">{project.tag}</div>
          <h3>{project.title}</h3>
        </div>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-detail-body">
        <div className="project-main-img">
          <img
            src={project.mainImage.src}
            alt={project.mainImage.alt}
            className={project.mainImage.contain ? 'contain' : undefined}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-detail-info">
          <p>{project.description}</p>
          <h4>Fonctionnalités clés</h4>
          <ul className="features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <h4>Stack technique</h4>
          <div className="tech">
            {project.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="metrics">
            {project.metrics.map((m) => (
              <div className="metric" key={m.value + m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`gallery${project.portrait ? ' portrait' : ''}`}>
        {project.gallery.map((g) => (
          <div className="gallery-item" key={g.src}>
            <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      {project.testimonial ? (
        <div className="testimonial">
          <p>{project.testimonial.quote}</p>
          <cite>— {project.testimonial.author}</cite>
        </div>
      ) : (
        <div className="testimonial placeholder">
          <p>Témoignage client à insérer — demander un retour au gérant de l'agence.</p>
          <cite>— Responsable, ChrisRoi Agence</cite>
        </div>
      )}
      {project.links.length > 0 && (
        <div className="project-detail-links">
          {project.links.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'}`}
              >
                {l.label} <span className="arrow">→</span>
              </a>
            ) : (
              <span key={l.label} className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'}`} style={{ opacity: 0.55, cursor: 'default' }}>
                {l.label}
              </span>
            ),
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="projets" className="alt">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow"><span className="dot" />Réalisations</div>
          <h2>Mes projets <span className="accent">phares</span></h2>
          <p className="section-desc">
            Deux projets réels, livrés pour un client. Présentés en détail : captures, fonctionnalités, stack
            et résultats.
          </p>
        </div>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
