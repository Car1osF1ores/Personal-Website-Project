import { Link } from "react-router-dom";
import "../css/homePage.css"; // Import your CSS file

function HomePage() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/CFLogo.png" alt="Logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href="#link3">Contact Me</a>
          </li>
        </ul>

        <div className="more-links">
          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../assets/images/linkedInIcon.png" alt="LinkedIn link" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="../assets/images/GitHub-Symbol.png" alt="GitHub link" />
          </a>
        </div>
      </nav>

      <article>
        
          <div className="left-article">
            <div>
              <h1 className="slide-in-right-left">Curiosity. Discipline.</h1>
              <h1
                style={{ fontFamily: "Poppins" }}
                className="slide-in-top-bottom"
              >
                Challenge-Driven
              </h1>
              <p className="slide-in-top-bottom">
                Hello there, this is where I share my journey, projects, and
                thoughts. Feel free to explore and learn more about me! I am a
                passionate software developer looking for an opportunity to
                contribute and grow in the tech industry. I have much to learn
                and I am eager to take on new challenges. I aim to connect with
                like-minded professionals and explore potential opportunities
                for my career growth.
              </p>
            </div>

            <div>
              <h3 className="slide-in-bottom-top">
                <Link to="/about" className="about-me-button-homepage">
                  About Me & Experience | Resume
                </Link>
              </h3>
            </div>
          </div>
        
        <div></div>
      </article>
    </div>
  );
}

export default HomePage;
