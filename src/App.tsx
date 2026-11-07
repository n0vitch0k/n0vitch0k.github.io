import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const STACK = [
  'React', 'React Native', 'TypeScript', 'Expo', 'Vite',
  'Tailwind', 'PocketBase', 'Django', 'Node.js', 'SQLite',
];

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Bandeau défilant (multiplié pour une boucle infinie) */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...STACK, ...STACK].map((tech, i) => (
            <span key={`${tech}-${i}`}>{tech}</span>
          ))}
        </div>
      </div>

      <main>
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
