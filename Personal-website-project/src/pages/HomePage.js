import "../css/homePage.css";
import Navbar from "../components/Navbar.js";

function HomePage({ hideNavbar = false }) {
  return (
    <section id="home" className="homepage-container">
      {!hideNavbar && <Navbar />}

      <div className="homepage-content">
        <div className="left-article">
          <div className="hero-text">
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
              contribute and grow in the tech industry. I have much to learn and
              I am eager to take on new challenges. I aim to connect with
              like-minded professionals and explore potential opportunities for
              my career growth.
            </p>
          </div>

          <a
            href="#about"
            className="about-me-button-homepage slide-in-bottom-top"
          >
            About Me & Experience | Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
