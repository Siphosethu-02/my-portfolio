import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Laboratory Tutor Assistant",
      department: "Department of Computer Systems Engineering",
      institution: "Tshwane University of Technology (TUT)",
      period: "Academic Year",
      location: "Pretoria / Soshanguve, South Africa",
      icon: <FaLaptopCode />,
      skills: ["Hardware Troubleshooting", "Lab Demonstrations", "Technical Support", "Student Guidance"],
      responsibilities: [
        "Facilitated practical laboratory sessions for Computer Systems Engineering students, assisting with circuit assembly, microcontroller programming, and software setups.",
        "Diagnosed and troubleshot hardware faults, instrument calibration issues, and software installation glitches in real time.",
        "Explained core technical concepts in programming, digital logic, and electronics clearly to support students during laboratory experiments.",
        "Enforced laboratory safety protocols and ensured computing equipment and test benches were maintained properly.",
      ],
    },
    {
      title: "Academic Tutor",
      department: "Student Academic Support Office (SASO)",
      institution: "Tshwane University of Technology (TUT)",
      period: "Academic Term",
      location: "Pretoria / Soshanguve, South Africa",
      icon: <FaChalkboardTeacher />,
      skills: ["Academic Mentoring", "Technical Explanation", "Session Preparation", "Curriculum Support"],
      responsibilities: [
        "Delivered structured tutoring sessions to engineering students in programming modules and core technical subjects.",
        "Broke down complex algorithmic, mathematical, and logic design problems into intuitive, manageable learning steps.",
        "Prepared tailored study resources, practice problem sets, and targeted exam revision material.",
        "Provided one-on-one and small group academic mentoring, helping students overcome learning hurdles and boost module pass rates.",
      ],
    },
    {
      title: "Residence Mentor",
      department: "Student Affairs & Residence Life",
      institution: "Tshwane University of Technology (TUT)",
      period: "Academic Term",
      location: "Pretoria / Soshanguve, South Africa",
      icon: <FaUsers />,
      skills: ["Student Mentorship", "Communication", "Time Management", "Conflict Resolution"],
      responsibilities: [
        "Provided mentorship and transitional guidance to first-year university students adapting to higher education life and academic demands.",
        "Facilitated peer study groups and encouraged disciplined academic habits, time management, and balanced wellbeing.",
        "Maintained mentorship records, monitored student integration progress, and served as a liaison to university support services.",
        "Organized student community engagements and supported a collaborative, positive living-learning environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Leadership & Teaching</span>
        <h2 className="section-title">Experience & Roles</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Real academic leadership, technical tutoring, laboratory support, and student mentorship roles held at Tshwane University of Technology.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-spine" />
        <div className="timeline-list">
          {experiences.map((item, index) => (
            <div className="timeline-entry" key={index}>
              <div className="timeline-marker">
                <span className="marker-icon">{item.icon}</span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.title}</h3>
                    <h4 className="timeline-dept">{item.department}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                  </div>
                  <div className="timeline-meta-tags">
                    <span className="meta-badge">
                      <FaCalendarAlt className="meta-icon" />
                      {item.period}
                    </span>
                    <span className="meta-badge">
                      <FaMapMarkerAlt className="meta-icon" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullet-list">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                <div className="timeline-skills-tags">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="exp-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
