function ProjectCard({ title, description, technologies }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <h4>Technologies</h4>

      <p>{technologies}</p>

      <button>View Project</button>
    </div>
  );
}

export default ProjectCard;