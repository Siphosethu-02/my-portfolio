function Experience() {
  const experiences = [
    {
      title: "Residence Mentor",
      company: "Tshwane University of Technology",
      description:
        "Supported first-year students with academic guidance and mentorship, helping them navigate the transition to university life and build strong study habits.",
    },
    {
      title: "Lab Assistant",
      company: "Tshwane University of Technology",
      description:
        "Facilitated practical laboratory sessions, assisted students in completing experiments, and troubleshot hardware and software issues in real time.",
    },
    {
      title: "Academic Tutor",
      company: "Tshwane University of Technology",
      description:
        "Tutored engineering students in mathematics and core technical modules, breaking down complex concepts to improve understanding and academic performance.",
    },
  ];

  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <span className="section-label">Experience</span>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="section-divider" />

      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
