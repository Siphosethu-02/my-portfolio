import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <h1>Hi, I'm Siphosethu Dlamini</h1>

        <TypeAnimation
          sequence={[
            "Computer Systems Engineering Student",
            2000,
            "AI Agent Developer",
            2000,
            "Software Developer",
            2000,
            "Python & React Developer",
            2000,
            "OpenCV Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          I build intelligent software solutions using Python, React,
          Flask and Artificial Intelligence.
          Passionate about solving real-world problems through technology.
        </p>

        <div className="hero-buttons">

          <a href="/SiphosethuCV.pdf" download>
            <button>Download CV</button>
          </a>

          <a
            href="https://github.com/Siphosethu-02"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

          <a
            href="https://www.linkedin.com/in/siphosethu-thobelani-dlamini-5658a637b"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
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