import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileDownload, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text" data-aos="fade-right">
        <div className="hero-badge">
          <span className="badge-pulse" />
          <span>Available for Internships & WIL 2026</span>
        </div>

        <h1 className="hero-name">
          Siphosethu Thobelani Dlamini
        </h1>

        <div className="hero-title-wrapper">
          <span className="hero-title-static">Computer Systems Engineering Student</span>
          <span className="hero-title-separator">|</span>
          <TypeAnimation
            sequence={[
              "Software & Agentic AI",
              2500,
              "Full-Stack Development",
              2200,
              "Embedded Systems & IoT",
              2200,
              "Practical Tech Solutions",
              2200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-typing"
          />
        </div>

        <p className="hero-intro">
          I am a Computer Systems Engineering student at Tshwane University of Technology interested in
          software development, artificial intelligence, full-stack web applications, embedded systems, and
          building reliable, practical technology solutions for real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <FaCode />
            <span>View Projects</span>
          </a>
          <a href="/SiphosethuCV.pdf" download className="btn-outline">
            <FaFileDownload />
            <span>Download CV</span>
          </a>
          <a
            href="https://github.com/Siphosethu-02"
            target="_blank"
            rel="noreferrer"
            className="btn-outline btn-social"
            aria-label="GitHub Profile"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/siphosethu-thobelani-dlamini-5658a637b"
            target="_blank"
            rel="noreferrer"
            className="btn-outline btn-social"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper" data-aos="fade-left">
        <div className="avatar-frame">
          <img
            src={profile}
            alt="Siphosethu Thobelani Dlamini"
            className="hero-avatar"
            onError={(e) => {
              // fallback if image fails
              e.target.style.display = "none";
            }}
          />
          <div className="avatar-glow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
