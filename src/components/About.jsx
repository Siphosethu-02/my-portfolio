import { FaServer, FaRobot, FaMicrochip, FaDatabase, FaAward, FaGraduationCap } from "react-icons/fa";

function About() {
  const pillars = [
    {
      icon: <FaServer />,
      title: "Full-Stack Web Apps",
      description: "Building responsive frontends and robust REST APIs with React, Node.js, Express, and FastAPI.",
    },
    {
      icon: <FaRobot />,
      title: "AI Applications & Agents",
      description: "Developing intelligent multi-agent systems, RAG workflows, LangGraph pipelines, and OpenCV computer vision.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Systems",
      description: "Designing structured relational databases and vector stores using MySQL, PostgreSQL, SQLite, and pgvector.",
    },
    {
      icon: <FaMicrochip />,
      title: "Embedded Systems & IoT",
      description: "Hands-on microcontroller programming with ESP32, C/C++, sensor telemetry, and hardware troubleshooting.",
    },
  ];

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Background</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
      </div>

      <div className="about-content">
        <div className="about-bio">
          <p className="about-lead">
            I am a final-year <strong>Computer Systems Engineering student</strong> at <strong>Tshwane University of Technology (TUT)</strong> with a strong academic record and a hands-on approach to engineering.
          </p>
          <p>
            My coursework and practical projects have given me direct experience engineering <strong>full-stack web applications</strong>, <strong>AI agents</strong>, <strong>database-driven systems</strong>, and <strong>embedded IoT devices</strong>. Whether architecting a 14-module hospital management system, building biometric exam access control, or developing multi-agent AI platforms, I focus on clean code, solid systems architecture, and tangible usability.
          </p>
          <p>
            I am actively seeking <strong>Software Developer internships</strong>, <strong>Work-Integrated Learning (WIL)</strong>, and <strong>Graduate / Junior Software Developer</strong> opportunities where I can contribute to production codebases and grow within an engineering team.
          </p>

          <div className="about-stats-grid">
            <div className="stat-card">
              <span className="stat-number">72%</span>
              <span className="stat-label">Current Academic Average</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">11</span>
              <span className="stat-label">Academic Distinctions</span>
            </div>
            <div className="stat-card highlight">
              <div className="stat-icon-wrap"><FaAward /></div>
              <span className="stat-number">Top Achiever</span>
              <span className="stat-label">TUT ICT Faculty Award (2024)</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrap"><FaGraduationCap /></div>
              <span className="stat-number">Final Year</span>
              <span className="stat-label">Tshwane University of Technology</span>
            </div>
          </div>
        </div>

        <div className="about-pillars">
          <h3 className="pillars-title">Core Engineering Capabilities</h3>
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div className="pillar-item" key={idx}>
                <div className="pillar-icon">{pillar.icon}</div>
                <div className="pillar-info">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
