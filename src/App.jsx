import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-name">Siphosethu Thobelani Dlamini</span>
          <span className="footer-tagline">
            Computer Systems Engineering Student • Software & Agentic AI
          </span>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Siphosethu Thobelani Dlamini. All rights reserved.</span>
          <span>
            Tshwane University of Technology (TUT) • Faculty of ICT
          </span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
