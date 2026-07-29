function Skills() {
  const skills = [
    "Python",
    "React",
    "Flask",
    "JavaScript",
    "HTML",
    "CSS",
    "SQLite",
    "Git",
    "OpenCV",
    "Artificial Intelligence",
    "Full Stack Development",
  ];

  return (
    <section
      id="skills"
      className="skills"
      data-aos="zoom-in"
    >
      <h2>Skills</h2>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;