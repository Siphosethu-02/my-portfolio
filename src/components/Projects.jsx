import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Smart Exam Venue Access System",
      description:
        "A facial recognition attendance and exam access management system developed using Python and Flask.",
      technologies: "Python • Flask • SQLite • OpenCV",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience.",
      technologies: "React • CSS • JavaScript",
    },
    {
      title: "AI Chatbot (Coming Soon)",
      description:
        "A chatbot powered by Generative AI that answers user questions.",
      technologies: "Python • Flask • AI API",
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
      data-aos="fade-left"
    >
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;