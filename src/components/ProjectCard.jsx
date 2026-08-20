function ProjectCard({ title, description, technologies, github, live, comingSoon }) {
  const tags = technologies.split("•").map((t) => t.trim());

  return (
    <div className="project-card" data-aos="fade-up">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-tech">
        {tags.map((tag) => (
          <span className="tech-tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-actions">
        {github ? (
          <a href={github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem" }}>
            GitHub
          </a>
        ) : null}
        {live ? (
          <a href={live} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem" }}>
            Live Demo
          </a>
        ) : comingSoon ? (
          <span className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem", opacity: 0.5, cursor: "default" }}>
            Coming Soon
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
