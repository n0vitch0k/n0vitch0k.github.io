export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap inner">
        <div>
          © {year} <strong>Williams Brou</strong><span className="dot-sep">•</span>Développeur Web &amp; Mobile
        </div>
        <div>
          Conçu &amp; développé à Abidjan<span className="dot-sep">•</span>React · Vite
        </div>
      </div>
    </footer>
  );
}
