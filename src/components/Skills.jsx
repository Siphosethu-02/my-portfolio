function Skills() {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Flask", icon: "🌶️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML & CSS", icon: "🎨" },
    { name: "SQLite", icon: "🗄️" },
    { name: "Git", icon: "🔀" },
    { name: "OpenCV", icon: "👁️" },
    { name: "AI / ML", icon: "🤖" },
    { name: "Full Stack", icon: "🧱" },
    { name: "REST APIs", icon: "🔌" },
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <span className="section-label">Skills</span>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span style={{ fontSize: "1.5rem", marginBottom: "0.5rem", display: "block" }}>
              {skill.icon}
            </span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
