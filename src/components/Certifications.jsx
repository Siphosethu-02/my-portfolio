import { FaCertificate, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Claude Code: The Coding Assistant",
      issuer: "Analytics Vidhya",
      issuedDate: "August 2, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/1drkht9c94",
      skills: ["Agentic Coding", "Developer Workflows", "Prompt Engineering"],
    },
    {
      title: "Introduction to Python",
      issuer: "Analytics Vidhya",
      issuedDate: "August 4, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/eu0kizu9lv",
      skills: ["Python Fundamentals", "Data Structures", "Algorithms"],
    },
    {
      title: "Generative AI - A Way of Life",
      issuer: "Analytics Vidhya",
      issuedDate: "August 5, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/5poxryq8gq",
      skills: ["Generative AI", "LLMs", "AI Applications"],
    },
    {
      title: "FastAPI for AI Engineers: The Complete Guide to Building Scalable AI APIs",
      issuer: "Analytics Vidhya",
      issuedDate: "August 13, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/z52g57p937",
      skills: ["FastAPI", "RESTful AI APIs", "Asynchronous Backend"],
    },
    {
      title: "Claude 4.5: Smarter, Faster & More Human AI",
      issuer: "Analytics Vidhya",
      issuedDate: "August 13, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/8aib5l36ag",
      skills: ["Advanced LLMs", "Reasoning Models", "AI Solution Design"],
    },
    {
      title: "Demystifying OpenAI Agents SDK",
      issuer: "Analytics Vidhya",
      issuedDate: "August 14, 2026",
      url: "https://courses.analyticsvidhya.com/certificates/eu1piccncc",
      skills: ["AI Agents", "Agent SDK", "Multi-Agent Systems"],
    },
  ];

  return (
    <section id="certifications" className="certifications" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Professional Development</span>
        <h2 className="section-title">Certifications & Courses</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Verified industry courses demonstrating continuous learning in modern AI, APIs, Python, and Agentic Engineering.
        </p>
      </div>

      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-header">
              <div className="cert-icon-wrapper">
                <FaCertificate className="cert-icon" />
              </div>
              <span className="cert-issuer-badge">
                <FaCheckCircle className="badge-check" />
                {cert.issuer}
              </span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>

            <div className="cert-date">
              <FaCalendarAlt className="date-icon" />
              <span>Issued: {cert.issuedDate}</span>
            </div>

            <div className="cert-skills">
              {cert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="cert-actions">
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="btn-cert-view"
                aria-label={`View Certificate for ${cert.title}`}
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
