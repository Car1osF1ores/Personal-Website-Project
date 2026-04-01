import "../css/homePage.css"; // Import your CSS file
import "../css/Navbar.css"; // Import Navbar CSS
import Navbar from "../components/Navbar.js";
import Icons from "../components/Icons.js";

function HomePage({ hideNavbar = false }) {
  return (
    <div className="homepage-container">
      {!hideNavbar && <Navbar />}

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
              contribute and grow in the tech industry. I have much to learn and
              I am eager to take on new challenges. I aim to connect with
              like-minded professionals and explore potential opportunities for
              my career growth.
            </p>
          </div>

          <div>
            <h3 className="slide-in-bottom-top">
              <a href="#about" className="about-me-button-homepage">
                About Me & Experience | Resume
              </a>
            </h3>
          </div>
        </div>

        <div></div>
      </article>
    </div>
  );
}

export default HomePage;
