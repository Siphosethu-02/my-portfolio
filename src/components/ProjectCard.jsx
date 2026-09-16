import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaExclamationCircle, FaLightbulb } from "react-icons/fa";

function ProjectCard({
  title,
  category,
  shortDescription,
  problem,
  solution,
  technologies,
  features,
  github,
  live,
}) {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <article className="project-card" data-aos="fade-up">
      <div className="project-card-top">
        <span className="project-category-badge">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-short-desc">{shortDescription}</p>
      </div>

      <div className="project-problem-solution">
        <div className="ps-box problem-box">
          <div className="ps-heading">
            <FaExclamationCircle className="ps-icon problem-icon" />
            <span>Problem</span>
          </div>
          <p>{problem}</p>
        </div>

        <div className="ps-box solution-box">
          <div className="ps-heading">
            <FaLightbulb className="ps-icon solution-icon" />
            <span>Solution</span>
          </div>
          <p>{solution}</p>
        </div>
      </div>

      <div className="project-tech-section">
        <span className="tech-heading">Technologies Used:</span>
        <div className="project-tech-tags">
          {technologies.map((tech, idx) => (
            <span className="tech-badge" key={idx}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-features-section">
        <span className="features-heading">Key Capabilities & Features:</span>
        <ul className="features-list">
          {features.slice(0, showFullDetails ? features.length : 4).map((feat, idx) => (
            <li key={idx}>
              <FaCheck className="feature-check" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {features.length > 4 && (
          <button
            type="button"
            className="btn-toggle-details"
            onClick={() => setShowFullDetails(!showFullDetails)}
          >
            {showFullDetails ? "Show Less Features ▲" : `+${features.length - 4} More Features ▼`}
          </button>
        )}
      </div>

      <div className="project-actions">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline project-btn"
            aria-label={`View ${title} source code on GitHub`}
          >
            <FaGithub />
            <span>GitHub Repository</span>
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary project-btn"
            aria-label={`Open live demo of ${title}`}
          >
            <FaExternalLinkAlt />
            <span>Live System</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
