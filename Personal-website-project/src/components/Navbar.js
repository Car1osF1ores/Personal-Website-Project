import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/images/CFLogo.png" alt="Logo" />
        </Link>
      </div>

      <button
        className={`navbar__hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact Me
          </Link>
        </li>
      </ul>

      <div className="navbar__more">
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
