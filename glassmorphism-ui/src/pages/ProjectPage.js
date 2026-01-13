import { useState } from "react";
import Navbar from "../components/Navbar";

// Inline styles for glassmorphism
const styles = `
* { box-sizing: border-box; }

.projects-page { min-height: 100vh; padding: 2rem 0; padding-top: 13rem; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }

.projects-header { 
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.header-content { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }

.header-icon { color: #fff; }

.projects-header h1 { font-size: 1.875rem; font-weight: bold; color: #fff; margin: 0; }

.header-subtitle { color: rgba(255, 255, 255, 0.8); margin: 0; }

.filter-tabs { 
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.tabs-wrapper { display: flex; gap: 0.5rem; overflow-x: auto; scrollbar-width: thin; }

.tabs-wrapper::-webkit-scrollbar { height: 6px; }

.tabs-wrapper::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 3px; }

.tab-button { 
  padding: 0.5rem 1rem; 
  border-radius: 0.5rem; 
  font-weight: 500; 
  border: 1px solid rgba(255, 255, 255, 0.2); 
  cursor: pointer; 
  transition: all 0.2s; 
  white-space: nowrap; 
  background: rgba(255, 255, 255, 0.1); 
  color: #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.tab-button:hover { 
  background: rgba(255, 255, 255, 0.2); 
  transform: translateY(-2px);
}

.tab-button.active { 
  background: rgba(255, 255, 255, 0.25); 
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.projects-main { padding: 0; }

.framework-section { margin-bottom: 4rem; }

.framework-title { 
  font-size: 1.5rem; 
  font-weight: bold; 
  color: #fff; 
  margin-bottom: 1.5rem; 
  display: flex; 
  align-items: center; 
  gap: 0.5rem; 
}

.title-bar { 
  width: 4px; 
  height: 2rem; 
  background: rgba(255, 255, 255, 0.6); 
  border-radius: 2px; 
}

.projects-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }

@media (min-width: 768px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }

@media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

.project-card { 
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem; 
  overflow: hidden; 
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s; 
  display: flex; 
  flex-direction: column; 
}

.project-card:hover { 
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); 
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-image { position: relative; height: 12rem; overflow: hidden; background: rgba(0, 0, 0, 0.2); }

.project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }

.project-card:hover .project-image img { transform: scale(1.05); }

.framework-badge { 
  position: absolute; 
  top: 0.75rem; 
  right: 0.75rem; 
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white; 
  padding: 0.25rem 0.75rem; 
  border-radius: 9999px; 
  font-size: 0.875rem; 
  font-weight: 500; 
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }

.project-title { font-size: 1.25rem; font-weight: bold; color: #fff; margin: 0 0 0.5rem 0; }

.project-description { color: rgba(255, 255, 255, 0.8); margin: 0 0 1rem 0; flex: 1; }

.tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }

.tech-tag { 
  padding: 0.25rem 0.75rem; 
  background: rgba(255, 255, 255, 0.1); 
  color: #fff; 
  border-radius: 0.375rem; 
  font-size: 0.875rem; 
  font-weight: 500; 
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-links { display: flex; gap: 0.75rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.2); }

.link-button { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
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

.github-link { 
  background: rgba(0, 0, 0, 0.3); 
  color: white; 
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-link:hover { 
  background: rgba(0, 0, 0, 0.5); 
  transform: translateY(-2px);
}

.demo-link { 
  background: rgba(255, 255, 255, 0.2); 
  color: white; 
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.demo-link:hover { 
  background: rgba(255, 255, 255, 0.3); 
  transform: translateY(-2px);
}

.icon-large { width: 2rem; height: 2rem; }

.icon-small { width: 1rem; height: 1rem; }

.no-projects { text-align: center; padding: 5rem 0; }

.no-projects p { color: rgba(255, 255, 255, 0.8); font-size: 1.125rem; }

`;

// REAL PROJECT DATA

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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
    github: "",
    demo: "",
  },
  {
    id: 8,
    title: "GTA 6 HTML static site",
    description:
      "Built a static HTML site showcasing GTA 6 Demo, utilizing Bootstrap for responsive design and CSS for styling to create an engaging user experience.",
    framework: "Static Web",
    tech: ["HTML", "CSS"],
    image: "",
    github: "",
    demo: "",
  },
];

// Simple SVG Icons
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

function ProjectsPage() {
  const [selectedFramework, setSelectedFramework] = useState("All");

  const frameworks = ["All", ...new Set(projects.map((p) => p.framework))];
  const filteredProjects =
    selectedFramework === "All"
      ? projects
      : projects.filter((p) => p.framework === selectedFramework);

  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.framework]) {
      acc[project.framework] = [];
    }
    acc[project.framework].push(project);
    return acc;
  }, {});

  return (
    <>
      <style>{styles}</style>
      <Navbar />

      <div className="projects-page">
        <div className="container">
          <header className="projects-header">
            <div className="container">
              <div className="header-content">
                <div className="header-icon">
                  <CodeIcon />
                </div>
                <h1>Projects</h1>
              </div>
              <p className="header-subtitle">
                A collection of my development work across different frameworks
              </p>
            </div>
          </header>

          <div className="filter-tabs">
            <div className="container">
              <div className="tabs-wrapper">
                {frameworks.map((framework) => (
                  <button
                    key={framework}
                    onClick={() => setSelectedFramework(framework)}
                    className={`tab-button ${
                      selectedFramework === framework ? "active" : ""
                    }`}
                  >
                    {framework}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <main className="projects-main">
            <div className="container">
              {selectedFramework === "All" ? (
                Object.entries(groupedProjects).map(
                  ([framework, frameworkProjects]) => (
                    <div key={framework} className="framework-section">
                      <h2 className="framework-title">
                        <span className="title-bar"></span>
                        {framework}
                      </h2>
                      <div className="projects-grid">
                        {frameworkProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="projects-grid">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}

              {filteredProjects.length === 0 && (
                <div className="no-projects">
                  <p>No projects found for this framework.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

//--------PROJECT CARD COMPONENT--------//
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="framework-badge">{project.framework}</div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} className="link-button github-link">
            <GithubIcon />
            Code
          </a>
          <a href={project.demo} className="link-button demo-link">
            <ExternalLinkIcon />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
