import { Link } from "react-router-dom";
import "../css/projectPage.css"; // Import your CSS
import Navbar from "../components/Navbar";

function ProjectsPage() {
  return (
    <section className="section-one">
      <Navbar />

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
