import { Link } from "react-router-dom";
import "../css/projectPage.css";
import Navbar from "../components/Navbar";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // Your project data array

function ProjectsPage() {
  return (
    <section className="section-one">
      <Navbar />

      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
