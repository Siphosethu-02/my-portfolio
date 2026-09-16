import { FaGraduationCap, FaUniversity, FaAward, FaBookOpen } from "react-icons/fa";

function Education() {
  const highlights = [
    {
      title: "Current Academic Average",
      value: "72%",
      subtitle: "Maintained across core engineering and computing modules",
      icon: <FaAward className="edu-highlight-icon" />,
    },
    {
      title: "Academic Distinctions",
      value: "11 Distinctions",
      subtitle: "Earned in programming, embedded systems, and technical coursework",
      icon: <FaAward className="edu-highlight-icon" />,
    },
    {
      title: "Status & Level",
      value: "Final Year (2026)",
      subtitle: "National Diploma: Computer Systems Engineering",
      icon: <FaGraduationCap className="edu-highlight-icon" />,
    },
  ];

  const coreModules = [
    "Software Development & OOP",
    "Microcontrollers & Embedded Systems",
    "Database Systems & Design",
    "Digital Systems & Computer Architecture",
    "Network Systems & Data Communications",
    "Engineering Mathematics & Logic Design",
  ];

  return (
    <section id="education" className="education" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
      </div>

      <div className="education-container">
        <div className="education-card main-degree-card">
          <div className="degree-header">
            <div className="degree-icon-box">
              <FaUniversity />
            </div>
            <div className="degree-meta">
              <span className="edu-institution">Tshwane University of Technology (TUT)</span>
              <h3 className="edu-degree">National Diploma in Computer Systems Engineering</h3>
              <div className="edu-submeta">
                <span className="edu-faculty">Faculty of Information and Communication Technology</span>
                <span className="edu-period">Final Year • Expected Completion 2026</span>
              </div>
            </div>
          </div>

          <p className="edu-summary">
            Comprehensive engineering training integrating software engineering, microcontrollers, 
            IoT architectures, database design, and real-time computing systems. Emphasizes rigorous analytical 
            problem solving and practical systems implementation.
          </p>

          <div className="edu-metrics-grid">
            {highlights.map((item, index) => (
              <div className="edu-metric-box" key={index}>
                <div className="edu-metric-top">
                  {item.icon}
                  <span className="edu-metric-title">{item.title}</span>
                </div>
                <div className="edu-metric-val">{item.value}</div>
                <div className="edu-metric-sub">{item.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="edu-modules-wrap">
            <div className="modules-label">
              <FaBookOpen style={{ marginRight: "0.5rem" }} />
              Key Focus Areas & Core Modules
            </div>
            <div className="module-chips">
              {coreModules.map((module, i) => (
                <span key={i} className="module-chip">
                  {module}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
