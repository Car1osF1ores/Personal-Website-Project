import "../css/aboutMePage.css";
import "../css/Navbar.css";
import Navbar from "../components/Navbar.js";
import Resume from "../components/Resume.js";
import Icons from "../components/Icons.js";

function AboutPage() {
  const scrollToSection = () => {
    document.querySelector(".section-two").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-one">
        <Navbar />

        {/* Tech Stack Icons */}
        <Icons />
        {/* Introduction */}
        <article>
          <div>
            <h1 className="slide-in-right-left">
              Hello! I'm Carlos, A <span className="fany-word">Passionate</span>{" "}
              Developer With A Love For Creating{" "}
              <span className="fany-word">Innovative Solutions</span> And
              <span className="fany-word"> Simplicity</span>
            </h1>
          </div>
          <div>
            <p className="slide-in-top-bottom">
              I've worked on full-stack web applications and RESTful APIs,
              building backend services, designing responsive frontends, and
              integrating database-driven systems. My experience includes
              authentication, CRUD operations, caching, clean architecture, and
              object-oriented design. I focus on writing maintainable code,
              improving performance, and continuously learning modern
              technologies to deliver reliable, scalable solutions.
            </p>
          </div>
        </article>

        {/* Scroll Button */}
        <button className="scroll-down-btn" onClick={scrollToSection}>
          <span>↓</span>
        </button>
      </section>

      {/* Resume Section */}
      <section className="section-two">
        {/* Resume Header */}
        <div className="resume">
          <div className="resume-left">
            <a
              href="/CarlosResume.pdf"
              download="CarlosResume.pdf"
              className="Download-button"
            >
              Download | Resume
            </a>

            <h1>My Resume</h1>
          </div>
        </div>

        {/* About Me & Info Cards */}
        <div className="description-resume-container">
          <div className="about-me-header">
            <h1>About Me</h1>
            <Resume />
          </div>

          <div className="info-cards-container">
            <div className="info-card">
              <h2>Work Experience</h2>
              <p>
                This is a test paragraph for my resume section Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Impedit velit sunt
                qui quia libero nam magnam suscipit, expedita quisquam dolorem
                nobis officia eaque inventore corrupti? A quam amet sunt ullam.
              </p>
            </div>

            <div className="info-card">
              <h2>Projects</h2>
              <p>
                This is a test paragraph for my resume section Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Impedit velit sunt
                qui quia libero nam magnam suscipit, expedita quisquam dolorem
                nobis officia eaque inventore corrupti? A quam amet sunt ullam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
