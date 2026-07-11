import "../css/homePage.css";
import HeroText from "../components/HeroText.js";
import profilePicture from "../assets/images/Profile-Picture.png";

function HomePage() {
  return (
    <section id="home" className="homepage-container">
      <div className="homepage-content">
        <div className="left-article">
          <HeroText />
          <a
            href="#about"
            className="about-me-button-homepage slide-in-bottom-top"
          >
            About Me & Experience | Resume
          </a>
        </div>
        <div className="right-article">
          <div className="hero-image-wrapper slide-in-left-right">
            <img src={profilePicture} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
