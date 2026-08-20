import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Smart Exam Venue Access System",
      description:
        "A facial recognition attendance and exam access management system. Students are verified via live camera before entering the exam venue, with all records logged to a database.",
      technologies: "Python • Flask • SQLite • OpenCV",
      github: "https://github.com/Siphosethu-02",
    },
    {
      title: "UniAgent — AI University Platform",
      description:
        "A production-grade multi-agent AI platform for university students. Features 7 AI domain agents (academic, career, CV analysis, mock interviews, RAG knowledge base, study planning, notifications), human-in-the-loop approval before any consequential action, long-term memory, and an admin observability dashboard — all measured by real evaluation suites.",
      technologies: "Python • FastAPI • LangGraph • OpenAI GPT-4o • PostgreSQL • pgvector • React • TypeScript • Docker",
      github: "https://github.com/Siphosethu-02",
    },
    {
      title: "Personal Portfolio",
      description:
        "This very site — a responsive, animated developer portfolio built with React and Vite, featuring particle effects, AOS scroll animations, and a dark/light theme.",
      technologies: "React • Vite • CSS • JavaScript",
      github: "https://github.com/Siphosethu-02",
      live: "https://siphosethu-dlamini.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-left">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Things I've Built</h2>
      <div className="section-divider" />

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
