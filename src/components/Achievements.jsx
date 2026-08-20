function Achievements() {
  const achievements = [
    {
      icon: "🥇",
      title: "Top Academic Achiever — ICT Faculty",
      year: "2024",
      description: "Recognised as the highest performing student across the ICT faculty at TUT.",
    },
    {
      icon: "🎓",
      title: "Diploma in Computer Systems Engineering",
      year: "In Progress",
      description: "Currently studying at Tshwane University of Technology, targeting Cum Laude.",
    },
    {
      icon: "⭐",
      title: "11 Distinctions Earned",
      year: "Academic Record",
      description: "Consistently achieving distinctions across core engineering and computing subjects.",
    },
    {
      icon: "📈",
      title: "72% Current Average",
      year: "Target: Cum Laude 🎯",
      description: "Actively working towards graduating with distinction and maintaining a strong academic record.",
    },
  ];

  return (
    <section id="achievements" className="achievements-section" data-aos="zoom-in">
      <span className="section-label">Achievements</span>
      <h2 className="section-title">Academic Highlights</h2>
      <div className="section-divider" />

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <div className="card-icon">{item.icon}</div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <span className="badge">{item.year}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
