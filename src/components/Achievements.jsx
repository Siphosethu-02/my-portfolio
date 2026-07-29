function AcademicAchievements() {
  const achievements = [
    {
      title: "Top Academic Achiever (ICT Faculty)",
      year: "2024",
      description: "Recognized as a top performing student across the ICT faculty.",
      icon: "🥇"
    },
    {
      title: "Diploma in Computer Systems Engineering",
      year: "Current",
      description: "Tshwane University of Technology (TUT)",
      icon: "🎓"
    },
    {
      title: "11 Distinctions Earned",
      year: "Academic Record",
      description: "Consistently maintaining high academic excellence across core engineering subjects.",
      icon: "⭐"
    },
    {
      title: "72% Current Average",
      year: "Target: Cum Laude 🎯",
      description: "Actively working towards graduating with distinction.",
      icon: "📈"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Academic Achievements 🏆</h2>
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

export default AcademicAchievements;