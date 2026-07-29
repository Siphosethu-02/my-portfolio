import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="hero-text">
        <h1>Hi, I'm Siphosethu Dlamini 👋</h1>

        <h2>Computer Systems Engineering Student</h2>

        <p>
          Passionate about Software Development, Artificial Intelligence,
          Full Stack Development, and building real-world applications using
          Python, React, Flask, and modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="/SiphosethuCV.pdf" download>
            <button>
              <FaDownload /> Download CV
            </button>
          </a>

          <a
            href="https://github.com/Siphosethu-02"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaGithub /> GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/siphosethu-thobelani-dlamini-5658a637b"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaLinkedin /> LinkedIn
            </button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Siphosethu Dlamini" />
      </div>
    </section>
  );
}

export default Hero;