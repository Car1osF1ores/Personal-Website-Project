import { useState, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <a href="/#">
          <img src="/assets/images/CFLogo.png" alt="Logo" />
        </a>
      </div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="/#" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenu}>
            About Me
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeMenu}>
            Contact Me
          </a>
        </li>
        <li className="navbar__links-icons">
          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/linkedInIcon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/GitHub-Symbol.png" alt="GitHub" />
          </a>
        </li>
      </ul>

      <div className="navbar__more">
        <a
          href="https://www.linkedin.com/jobs/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/linkedInIcon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="/assets/images/GitHub-Symbol.png" alt="GitHub" />
        </a>
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
    </nav>
  );
}

export default Navbar;
