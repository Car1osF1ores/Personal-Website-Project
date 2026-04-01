import React from "react";
import "../css/ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Thumbnail */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />
      )}

      {/* Content */}
      <div className="project-card-content">
        <h2 className="project-card-title">{project.title}</h2>

        <p className="project-card-category">
          {project.category} • {project.status}
        </p>

        <p className="project-card-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-card-tech">
          <strong>Tech: </strong>
          <span>{project.techStack.join(", ")}</span>
        </div>

        {/* Buttons */}
        <div className="project-card-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn github-btn"
          >
            GitHub
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn live-btn"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
