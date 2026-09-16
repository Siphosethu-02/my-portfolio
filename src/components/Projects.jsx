import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Hospital Management System (MediCare HMS)",
      category: "Full-Stack Enterprise Web Application",
      shortDescription:
        "A comprehensive 14-module hospital management system connecting clinical workflows, electronic medical records, pharmacy inventory, and billing under a unified secure web portal.",
      problem:
        "Paper-based health records and disconnected clinic departments cause patient scheduling conflicts, slow triage, inventory inaccuracies, delayed billing, and high administrative overhead.",
      solution:
        "Architected a scalable multi-tier web platform with React + Vite and Node.js/Express backed by MySQL, implementing JWT-based Role-Based Access Control (RBAC) across 6 clinical and administrative staff roles.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MySQL",
        "JWT Auth",
        "RBAC",
        "Docker",
        "Docker Compose",
      ],
      features: [
        "Role-Based Access Control (RBAC) for Admin, Doctors, Nurses, Pharmacists, Lab Technicians, and Receptionists",
        "Patient registration, admission history, vitals monitoring, and longitudinal medical records",
        "Doctor availability schedules, automated appointment booking, and consultation queues",
        "Pharmacy inventory tracking with automatic low-stock alerts, expiration tracking, and prescription dispensing",
        "Laboratory test requisition, result documentation, and status notifications",
        "Billing module with automated invoice generation, payment status tracking, and downloadable PDF invoices",
        "Analytics dashboard with bed occupancy metrics, revenue figures, and exportable PDF executive reports",
        "Full containerization via Docker and Docker Compose for single-command local and production deployment",
      ],
      github: "https://github.com/Siphosethu-02",
      live: "https://hospital-management-syst-3c936.web.app",
    },
    {
      title: "UniAgent — AI University Student Agent Platform",
      category: "Agentic AI & Distributed Systems",
      shortDescription:
        "A production-grade multi-agent AI system designed for university students, orchestrating specialized AI domain agents with long-term memory and human-in-the-loop oversight.",
      problem:
        "University students struggle to navigate complex academic requirements, career planning, technical documentation, and study schedules across fragmented university portals without personalized guidance.",
      solution:
        "Designed a multi-agent AI platform powered by Python, FastAPI, and LangGraph. Utilizes stateful graph execution, RAG embeddings with pgvector, session checkpointers, and an admin observability dashboard.",
      technologies: [
        "Python",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "pgvector",
        "Docker",
        "React",
        "TypeScript",
      ],
      features: [
        "Multi-agent stateful orchestration built with LangGraph and session state persistence",
        "7 specialized domain agents: Academic Advising, Career Guidance, Document Analysis, Project Evaluation, Reports, Support, and Supervisor Orchestrator",
        "Retrieval-Augmented Generation (RAG) knowledge engine using pgvector embeddings for student handbooks and syllabus search",
        "Human-in-the-loop validation requiring user confirmation before executing consequential actions",
        "Asynchronous FastAPI backend with distributed task routing and rate limiting",
        "Admin observability dashboard monitoring agent execution traces and evaluation metrics",
      ],
      github: "https://github.com/Siphosethu-02",
    },
    {
      title: "Smart Exam Venue Access System (SRSEVAR)",
      category: "Computer Vision & Biometrics",
      shortDescription:
        "An automated exam venue registration and biometric access management system powered by real-time facial recognition and automated attendance logging.",
      problem:
        "Manual verification of student identity cards during exam venue entry is time-consuming, prone to human error, vulnerable to impersonation fraud, and delays exam start times.",
      solution:
        "Developed an automated biometric access verification solution using Python, Flask, OpenCV, and SQLite. Captures student facial features via live camera feed, compares against enrolled templates, and logs access instantaneously.",
      technologies: [
        "Python",
        "Flask",
        "OpenCV",
        "SQLite",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      features: [
        "Real-time face detection and feature extraction using OpenCV Haar Cascades and LBPH face recognition",
        "Biometric student registration module with automated face dataset capture and model training scripts",
        "Instant live camera stream verification against enrolled student biometric records",
        "Automated exam session attendance logging with precise entry timestamps in SQLite",
        "Venue supervisor administrative dashboard displaying real-time entry logs and verification status",
        "Downloadable attendance and verification audit reports for exam administrators",
      ],
      github: "https://github.com/Siphosethu-02",
    },
    {
      title: "Smart House & IoT Automation System",
      category: "Embedded Systems & IoT",
      shortDescription:
        "A microcontroller-based smart home environmental monitoring and device automation system featuring sensor telemetry and remote wireless control.",
      problem:
        "Inability to remotely monitor domestic environmental conditions and automate electrical appliances leads to inefficient power consumption and delayed safety responses.",
      solution:
        "Engineered an IoT system using the ESP32 microcontroller and Embedded C/C++. Collects sensor readings, executes automated threshold rules, and provides remote telemetry over Wi-Fi.",
      technologies: [
        "ESP32",
        "Embedded C/C++",
        "IoT",
        "Wi-Fi",
        "Sensors",
        "Proteus",
        "Atmel Studio",
      ],
      features: [
        "ESP32 firmware developed in Embedded C/C++ for real-time sensor polling",
        "Multi-sensor telemetry measuring temperature, ambient light, and motion detection",
        "Relay-actuated automated device switching based on customizable environmental thresholds",
        "Wi-Fi wireless communication delivering live device telemetry to a central interface",
        "Hardware circuit simulation and PCB schematic verification performed in Proteus",
      ],
    },
    {
      title: "Personal Developer Portfolio",
      category: "Frontend Engineering",
      shortDescription:
        "A responsive, accessible, high-performance portfolio built to showcase engineering projects, academic awards, verified certifications, and technical experience.",
      problem:
        "Technical recruiters and hiring managers need a clear, fast-loading, uncluttered way to evaluate a candidate's real engineering ability, credentials, and projects.",
      solution:
        "Engineered a custom React 19 + Vite single-page application featuring dynamic particle background effects, theme toggle, mobile-responsive layout, and structured technical project breakdowns.",
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "JavaScript",
        "tsparticles",
        "Responsive Design",
      ],
      features: [
        "Built with React 19 and Vite for instant load times and lightweight bundle size",
        "Dynamic particle animation layer with custom physics and hover interaction",
        "Persistent Dark Mode and Light Mode theme toggle with accessible color contrast",
        "Fully responsive layout optimized for mobile, tablet, laptop, and widescreen displays",
        "Detailed project cards featuring problem-solution breakdowns and direct repository links",
      ],
      github: "https://github.com/Siphosethu-02",
      live: "https://siphosethu-dlamini.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Portfolio Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Real software, AI agent platforms, biometric systems, and embedded hardware projects engineered from conception to deployment.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
