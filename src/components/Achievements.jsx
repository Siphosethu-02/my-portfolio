import { FaTrophy, FaStar, FaChartLine, FaUniversity } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="achievement-icon gold" />,
      title: "Top Academic Achiever Award",
      organization: "Tshwane University of Technology (TUT)",
      faculty: "Faculty of Information and Communication Technology",
      year: "2024",
      status: "Official Faculty Award Received",
      description:
        "Formally awarded the Top Academic Achiever recognition by the TUT ICT Faculty in 2024 in acknowledgment of exceptional academic standing, rigorous work ethic, and superior module results across the engineering department.",
    },
    {
      icon: <FaStar className="achievement-icon blue" />,
      title: "11 Academic Distinctions",
      organization: "Tshwane University of Technology (TUT)",
      faculty: "Computer Systems Engineering Curriculum",
      year: "Academic Record",
      status: "Verified Academic Distinction",
      description:
        "Consistently earned distinction grades (75%+) across 11 core university modules, including programming, digital systems, database engineering, microcontroller systems, and engineering mathematics.",
    },
    {
      icon: <FaChartLine className="achievement-icon green" />,
      title: "72% Current Academic Average",
      organization: "Tshwane University of Technology (TUT)",
      faculty: "National Diploma in Computer Systems Engineering",
      year: "Final Year (2026)",
      status: "High Academic Standing",
      description:
        "Maintaining a consistent cumulative academic average of 72% throughout the Computer Systems Engineering diploma, reflecting sustained academic discipline and technical competence.",
    },
  ];

  return (
    <section id="achievements" className="achievements" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Honors & Recognition</span>
        <h2 className="section-title">Academic Achievements</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Demonstrated academic excellence, faculty-level honors, and sustained high performance throughout university studies.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-card-header">
              <div className="achievement-icon-box">{item.icon}</div>
              <span className="achievement-status-badge">{item.status}</span>
            </div>

            <h3 className="achievement-title">{item.title}</h3>

            <div className="achievement-meta">
              <div className="achievement-org">
                <FaUniversity className="meta-icon" />
                <span>{item.organization}</span>
              </div>
              <span className="achievement-faculty">{item.faculty}</span>
              <span className="achievement-year">{item.year}</span>
            </div>

            <p className="achievement-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
