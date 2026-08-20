function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <div className="about-inner">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />

        <p>
          I'm a Computer Systems Engineering student at Tshwane University of
          Technology, driven by a passion for Software Development, Artificial
          Intelligence, and Backend Engineering. I love building real-world
          solutions — from facial recognition systems to full-stack web apps —
          using Python, React, Flask, and modern AI tools.
        </p>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">11</div>
            <div className="stat-label">Distinctions Earned</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">72%</div>
            <div className="stat-label">Current Average</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">TUT</div>
            <div className="stat-label">ICT Top Achiever 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
