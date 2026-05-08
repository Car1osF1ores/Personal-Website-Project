import "../css/homePage.css";
import Navbar from "../components/Navbar.js";

const HERO_HEADINGS = [
  {
    text: "Curiosity. Discipline.",
    animation: "slide-in-right-left",
    style: {},
  },
  {
    text: "Challenge-Driven",
    animation: "slide-in-top-bottom",
    style: { fontFamily: "Poppins" },
  },
];

const HERO_DESCRIPTION = `Hello there, this is where I share my journey, projects, and
thoughts. Feel free to explore and learn more about me! I am a
passionate software developer looking for an opportunity to
contribute and grow in the tech industry. I have much to learn and
I am eager to take on new challenges. I aim to connect with
like-minded professionals and explore potential opportunities for
my career growth.`;

function HeroText() {
  return (
    <div className="hero-text">
      {HERO_HEADINGS.map(({ text, animation, style }) => (
        <h1 key={text} className={animation} style={style}>
          {text}
        </h1>
      ))}
      <p className="slide-in-top-bottom">{HERO_DESCRIPTION}</p>
    </div>
  );
}

function HomePage({ hideNavbar = false }) {
  return (
    <section id="home" className="homepage-container">
      {!hideNavbar && <Navbar />}

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
            <img
              src="assets/images/Profile-Picture.png"
              alt="Hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
