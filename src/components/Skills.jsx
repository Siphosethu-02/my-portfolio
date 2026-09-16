import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaRobot, 
  FaTools, 
  FaMicrochip 
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "JavaScript", "C / C++", "SQL"],
    },
    {
      category: "Frontend Development",
      icon: <FaLaptopCode />,
      skills: ["React", "Vite", "HTML5", "CSS3 / Modern CSS", "Responsive UI"],
    },
    {
      category: "Backend Development",
      icon: <FaServer />,
      skills: ["Node.js", "Express", "FastAPI", "Flask", "RESTful APIs"],
    },
    {
      category: "Databases & Storage",
      icon: <FaDatabase />,
      skills: ["MySQL", "PostgreSQL", "SQLite", "pgvector (Vector DB)"],
    },
    {
      category: "AI, Agents & Vision",
      icon: <FaRobot />,
      skills: ["Generative AI", "AI Agents", "LangGraph", "OpenCV (Computer Vision)", "RAG Systems"],
    },
    {
      category: "DevOps & Developer Tools",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Docker", "Docker Compose", "Postman", "Linux Basics"],
    },
    {
      category: "Embedded Systems & IoT",
      icon: <FaMicrochip />,
      skills: ["ESP32", "ATmega328P", "8051", "Microcontrollers", "Sensors & Actuators", "Proteus", "Atmel Studio"],
    },
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Technical Competencies</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Technologies and tools practically applied in academic engineering coursework, full-stack systems, AI agent development, and embedded hardware projects.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <div className="skill-group-card" key={index}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <h3 className="skill-group-title">{group.category}</h3>
            </div>
            <div className="skill-tag-list">
              {group.skills.map((skill, sIdx) => (
                <span className="skill-tag" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
