import { Link } from "react-router-dom";
import "../css/projectPage.css"; // Import your CSS

function ProjectsPage() {
  return (
    <section className="section-one">
      <nav>
        <div className="logo">
          <a href="#">
            <img src="../assets/images/CFLogo.png" alt="Logo" />
          </a>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="#link3">Contact Me</a></li>
        </ul>

        <div className="more-links">
          <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer">
            <img src="../assets/images/linkedInIcon.png" alt="LinkedIn link" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="../assets/images/GitHub-Symbol.png" alt="GitHub link" />
          </a>
        </div>
      </nav>

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-image">
            <img src="https://picsum.photos/800/600" alt="Example Project" />
            <div className="card-title">Card Title</div>
          </div>
          <div className="card-info">
            <h2>Info Section</h2>
            <p>
              This is where you can put details or a short description about the
              image or card content.
            </p>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="git-button">
                <p>Github Link</p>
              </div>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-image">
            <img src="https://picsum.photos/800/600" alt="Example Project" />
            <div className="card-title">Card Title</div>
          </div>
          <div className="card-info">
            <h2>Info Section</h2>
            <p>
              This is where you can put details or a short description about the
              image or card content.
            </p>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="git-button">
                <p>Github Link</p>
              </div>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-image">
            <img src="https://picsum.photos/800/600" alt="Example Project" />
            <div className="card-title">Card Title</div>
          </div>
          <div className="card-info">
            <h2>Info Section</h2>
            <p>
              This is where you can put details or a short description about the
              image or card content.
            </p>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="git-button">
                <p>Github Link</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
  