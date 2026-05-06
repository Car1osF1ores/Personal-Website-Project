import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";

const INTERVAL = 3500;

const styles = `
* { box-sizing: border-box; }

.projects-page { min-height: 100vh; padding: 2rem 0; padding-top: 13rem; }
.projects-page.embedded { padding-top: 2rem; }

.container { max-width: 900px; margin: 0 auto; padding: 0 1rem; }

.projects-header {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.header-content { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
.header-icon { color: #fff; }
.projects-header h1 { font-size: 1.875rem; font-weight: bold; color: #fff; margin: 0; }
.header-subtitle { color: rgba(255,255,255,0.8); margin: 0; }

.filter-tabs {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.tabs-wrapper { display: flex; gap: 0.5rem; overflow-x: auto; scrollbar-width: thin; }
.tabs-wrapper::-webkit-scrollbar { height: 6px; }
.tabs-wrapper::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 3px; }

.tab-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.2);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  background: rgba(255,255,255,0.1);
  color: #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.tab-button:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }
.tab-button.active {
  background: rgba(255,255,255,0.25);
  border-color: rgba(255,255,255,0.4);
  box-shadow: 0 4px 12px rgba(255,255,255,0.2);
}

/* Carousel */
.carousel-stage { display: flex; flex-direction: column; align-items: center; }
.card-wrapper { width: 100%; max-width: 640px; }

.progress-bar-wrap {
  width: 100%;
  max-width: 640px;
  margin-top: 0.75rem;
  height: 3px;
  background: rgba(255,255,255,0.15);
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: rgba(255,255,255,0.7);
  border-radius: 3px;
  transition: none;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
}

.ctrl-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  color: #fff;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.ctrl-btn:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }

.dots-row {
  display: flex; gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 300px;
}
.dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.dot.active { background: rgba(255,255,255,0.9); transform: scale(1.4); }

.pause-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  color: #fff;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem;
  transition: background 0.2s;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.pause-btn:hover { background: rgba(255,255,255,0.25); }

.card-counter {
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  min-width: 40px;
  text-align: center;
}

/* Project Card */
.project-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: opacity 0.35s ease, transform 0.35s ease;
  cursor: pointer;
}
.project-card:hover { border-color: rgba(255,255,255,0.4); box-shadow: 0 12px 40px rgba(0,0,0,0.2); }
.project-card.fade-out { opacity: 0; transform: translateY(10px); }
.project-card.fade-in { opacity: 1; transform: translateY(0); }

.project-image { position: relative; height: 12rem; overflow: hidden; background: rgba(0,0,0,0.2); }
.project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
.project-card:hover .project-image img { transform: scale(1.05); }

.image-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,0.2);
}
.image-placeholder-icon { font-size: 3rem; opacity: 0.4; }

.click-hint {
  position: absolute;
  bottom: 0.5rem;
  right: 0.75rem;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.6);
  background: rgba(0,0,0,0.3);
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
  pointer-events: none;
  transition: opacity 0.2s;
}
.project-card:hover .click-hint { opacity: 0; }

.framework-badge {
  position: absolute;
  top: 0.75rem; right: 0.75rem;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.3);
}

.project-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.project-title { font-size: 1.25rem; font-weight: bold; color: #fff; margin: 0 0 0.5rem 0; }
.project-description { color: rgba(255,255,255,0.8); margin: 0 0 1rem 0; flex: 1; }

.tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.2);
}

.project-links {
  display: flex; gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.link-button {
  display: flex; align-items: center; justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  flex: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.github-link { background: rgba(0,0,0,0.3); color: white; border: 1px solid rgba(255,255,255,0.2); }
.github-link:hover { background: rgba(0,0,0,0.5); transform: translateY(-2px); }
.demo-link { background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); }
.demo-link:hover { background: rgba(255,255,255,0.3); transform: translateY(-2px); }

.icon-large { width: 2rem; height: 2rem; }
.icon-small { width: 1rem; height: 1rem; }

.no-projects { text-align: center; padding: 5rem 0; }
.no-projects p { color: rgba(255,255,255,0.8); font-size: 1.125rem; }

/* ── Modal Lightbox ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: overlayIn 0.25s ease;
}

@keyframes overlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-box {
  background: rgba(20,20,35,0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 1.25rem;
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.2) transparent;
}
.modal-box::-webkit-scrollbar { width: 5px; }
.modal-box::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.92) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-image {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 1.25rem 1.25rem 0 0;
  background: rgba(0,0,0,0.3);
  flex-shrink: 0;
}
.modal-image img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.modal-image-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 5rem;
  opacity: 0.3;
}
.modal-framework-badge {
  position: absolute;
  top: 1rem; left: 1rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.25);
  letter-spacing: 0.03em;
}

.modal-close {
  position: absolute;
  top: 1rem; right: 1rem;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(6px);
  line-height: 1;
}
.modal-close:hover { background: rgba(255,0,0,0.4); transform: scale(1.1); }

.modal-body { padding: 1.75rem; }
.modal-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
}
.modal-description {
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  margin: 0 0 1.25rem 0;
  font-size: 1rem;
}
.modal-tech-stack {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.modal-tech-tag {
  padding: 0.3rem 0.85rem;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.9);
  border-radius: 0.375rem;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.15);
}
.modal-links {
  display: flex; gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255,255,255,0.12);
}

/* Mobile tweaks */
@media (max-width: 600px) {
  .projects-page { padding-top: 8rem; }
  .projects-header { padding: 1.25rem; }
  .projects-header h1 { font-size: 1.4rem; }
  .modal-image { height: 200px; }
  .modal-body { padding: 1.25rem; }
  .modal-title { font-size: 1.2rem; }
  .modal-links { flex-direction: column; }
  .carousel-controls { gap: 0.6rem; }
  .card-counter { display: none; }
}
`;

const projects = [
  {
    id: 1,
    title: "Microservices E-Commerce Platform",
    description:
      "Developed an e-commerce application using a microservices architecture with Spring Boot and Netflix Eureka, applying modern API design principles, service discovery, caching, and scalable microservices patterns.",
    framework: "Spring Boot",
    tech: [
      "Java",
      "Spring Boot",
      "Netflix Eureka",
      "REST APIs",
      "Microservices",
      "Caching",
    ],
    image: "",
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Task Collaboration App",
    description:
      "Built a fully functional backend API and contributed to frontend development. Implemented real-time notifications using SignalR and applied clean architecture and design patterns for scalability.",
    framework: "ASP.NET",
    tech: [
      "C#",
      "ASP.NET Core",
      "SignalR",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "GitHub",
    ],
    image: "/assets/images/chat-app.png",
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Equipment Rental Web Application",
    description:
      "Developed a rental platform with OAuth 2.0 authentication, layered backend architecture, and secure API access. Deployed backend services on a remote server.",
    framework: "ASP.NET MVC",
    tech: [
      "C#",
      "ASP.NET MVC",
      "OAuth 2.0",
      "HTML",
      "CSS",
      "Bootstrap",
      "GitHub",
    ],
    image: "/assets/images/equipment-dashboard.png",
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Meditation Mobile App",
    description:
      "Implemented core features including sound playback and habit tracking using Flutter. Integrated Firebase and SQLite for local and remote data synchronization.",
    framework: "Flutter",
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "GitHub"],
    image: "/assets/images/nature.jpg",
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Car Rental Android App",
    description:
      "Developed the Car Screen feature and contributed to UX design. Applied design patterns such as Singleton, Factory, and Observer using Jetpack Compose.",
    framework: "Android",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "SQLite", "Android Studio"],
    image: "/assets/images/car-rental.png",
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Small Demo Applications",
    description:
      "Built multiple small demo applications across web and mobile platforms, including news apps using APIs and calculator apps in multiple programming languages.",
    framework: "Multi-Platform",
    tech: ["React", "Java", "C#", "Kotlin", "Flutter", "REST APIs"],
    image: "/assets/images/treeForest.jpg",
    github: "",
    demo: "",
  },
  {
    id: 7,
    title: "Chat Demo Application",
    description:
      "Built a chat demo application across web demonstrating real-time messaging and user authentication features using various technologies.",
    framework: "ASP.NET",
    tech: ["C#", "REST APIs", "SignalR", "Bootstrap", "HTML", "CSS"],
    image: "/assets/images/chat-app.png",
    github: "",
    demo: "",
  },
  {
    id: 8,
    title: "GTA 6 HTML Static Site",
    description:
      "Built a static HTML site showcasing GTA 6 Demo, utilizing Bootstrap for responsive design and CSS for styling to create an engaging user experience.",
    framework: "Static Web",
    tech: ["HTML", "CSS"],
    image: "/assets/images/gta-dashboard.png",
    github: "",
    demo: "",
  },
];

// ── Icons ────────────────────────────────────────────────
const CodeIcon = () => (
  <svg
    className="icon-large"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const GithubIcon = () => (
  <svg className="icon-small" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="icon-small"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

// ── Modal ─────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={stopPropagation}>
        {/* Image section */}
        <div className="modal-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="modal-image-placeholder">💻</div>
          )}
          <div className="modal-framework-badge">{project.framework}</div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          <div className="modal-tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="modal-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-links">
            <a
              href={project.github || "#"}
              className="link-button github-link"
              onClick={(e) => !project.github && e.preventDefault()}
            >
              <GithubIcon /> Code
            </a>
            <a
              href={project.demo || "#"}
              className="link-button demo-link"
              onClick={(e) => !project.demo && e.preventDefault()}
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────
function ProjectsPage({ hideNavbar = false, isMobile = false }) {
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const frameworks = ["All", ...new Set(projects.map((p) => p.framework))];
  const filteredProjects =
    selectedFramework === "All"
      ? projects
      : projects.filter((p) => p.framework === selectedFramework);

  const goTo = useCallback(
    (idx, resetTimer = true) => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex(
          (idx + filteredProjects.length) % filteredProjects.length
        );
        setVisible(true);
      }, 350);
      if (resetTimer) setProgress(0);
    },
    [filteredProjects.length]
  );

  const animateProgress = useCallback(() => {
    if (progressRef.current) cancelAnimationFrame(progressRef.current);
    startTimeRef.current = performance.now();
    const step = (now) => {
      const pct = Math.min(
        ((now - startTimeRef.current) / INTERVAL) * 100,
        100
      );
      setProgress(pct);
      if (pct < 100) progressRef.current = requestAnimationFrame(step);
    };
    progressRef.current = requestAnimationFrame(step);
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    animateProgress();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % filteredProjects.length;
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex(next);
          setVisible(true);
        }, 350);
        return prev;
      });
      setProgress(0);
      animateProgress();
    }, INTERVAL);
  }, [filteredProjects.length, animateProgress]);

  useEffect(() => {
    if (paused || modalProject) {
      clearInterval(intervalRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    } else {
      startTimer();
    }
    return () => {
      clearInterval(intervalRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [paused, modalProject, startTimer]);

  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
    if (!paused) startTimer();
  }, [selectedFramework]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFilterChange = (fw) => {
    setSelectedFramework(fw);
    setCurrentIndex(0);
  };
  const handleGoTo = (idx) => {
    goTo(idx);
    if (!paused) startTimer();
  };
  const handlePrev = () => handleGoTo(currentIndex - 1);
  const handleNext = () => handleGoTo(currentIndex + 1);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <>
      <style>{styles}</style>
      {!hideNavbar && <Navbar />}

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

      <div
        id="projects"
        className={`projects-page${hideNavbar && !isMobile ? " embedded" : ""}`}
      >
        <div className="container">
          {/* Header */}
          <header className="projects-header">
            <div className="header-content">
              <div className="header-icon">
                <CodeIcon />
              </div>
              <h1>Projects</h1>
            </div>
            <p className="header-subtitle">
              A collection of my development work across different frameworks
            </p>
          </header>

          {/* Filter tabs */}
          <div className="filter-tabs">
            <div className="tabs-wrapper">
              {frameworks.map((framework) => (
                <button
                  key={framework}
                  onClick={() => handleFilterChange(framework)}
                  className={`tab-button ${
                    selectedFramework === framework ? "active" : ""
                  }`}
                >
                  {framework}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <main>
            {filteredProjects.length === 0 ? (
              <div className="no-projects">
                <p>No projects found for this framework.</p>
              </div>
            ) : (
              <div className="carousel-stage">
                <div className="card-wrapper">
                  <ProjectCard
                    project={currentProject}
                    visible={visible}
                    onClick={() => setModalProject(currentProject)}
                  />
                </div>

                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="carousel-controls">
                  <button
                    className="ctrl-btn"
                    onClick={handlePrev}
                    aria-label="Previous"
                  >
                    &#8592;
                  </button>

                  <div className="dots-row">
                    {filteredProjects.map((_, i) => (
                      <span
                        key={i}
                        className={`dot${i === currentIndex ? " active" : ""}`}
                        onClick={() => handleGoTo(i)}
                      />
                    ))}
                  </div>

                  <button
                    className="ctrl-btn"
                    onClick={handleNext}
                    aria-label="Next"
                  >
                    &#8594;
                  </button>

                  <button
                    className="pause-btn"
                    onClick={() => setPaused((p) => !p)}
                    aria-label={paused ? "Play" : "Pause"}
                  >
                    {paused ? "▶" : "⏸"}
                  </button>

                  <span className="card-counter">
                    {currentIndex + 1} / {filteredProjects.length}
                  </span>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

// ── Project Card ──────────────────────────────────────────
function ProjectCard({ project, visible, onClick }) {
  return (
    <div
      className={`project-card ${visible ? "fade-in" : "fade-out"}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View details for ${project.title}`}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            <span className="image-placeholder-icon">💻</span>
          </div>
        )}
        <div className="framework-badge">{project.framework}</div>
        <span className="click-hint">Click to expand</span>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a
            href={project.github || "#"}
            className="link-button github-link"
            onClick={(e) => {
              e.stopPropagation();
              if (!project.github) e.preventDefault();
            }}
          >
            <GithubIcon /> Code
          </a>
          <a
            href={project.demo || "#"}
            className="link-button demo-link"
            onClick={(e) => {
              e.stopPropagation();
              if (!project.demo) e.preventDefault();
            }}
          >
            <ExternalLinkIcon /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
