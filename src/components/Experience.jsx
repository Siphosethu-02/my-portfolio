function Experience() {
  const experiences = [
    {
      title: "Residence Mentor",
      company: "Tshwane University of Technology",
      description:
        "Supported first-year students by providing academic guidance, mentorship, and helping them adjust to university life.",
    },
    {
      title: "Lab Assistant",
      company: "Tshwane University of Technology",
      description:
        "Assisted students during practical laboratory sessions and helped troubleshoot technical issues.",
    },
    {
      title: "Academic Tutor",
      company: "Tshwane University of Technology",
      description:
        "Tutored engineering students in mathematics and technical modules while helping them improve their academic performance.",
    },
  ];

  return (
    <section
      id="experience"
      className="experience"
      data-aos="flip-up"
    >
      <h2>Experience</h2>

      <div className="experience-container">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
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