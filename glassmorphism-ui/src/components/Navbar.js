import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Import your CSS file

function Navbar() {
  return (
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
  );
}

export default Navbar;
