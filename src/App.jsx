import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Siphosethu Thobelani Dlamini</span>
      <span>
        Built with{" "}
        <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>
        {" "}+{" "}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a>
      </span>
    </footer>
  );
}

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
