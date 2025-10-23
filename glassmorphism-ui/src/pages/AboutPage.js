import { Link } from "react-router-dom";
import "../css/aboutMePage.css"; // Import your CSS file
import "../css/Navbar.css"; // Import Navbar CSS
import Navbar from "../components/Navbar.js";
function AboutPage() {
  return (
    <div>
      <section className="section-one">
        <Navbar />

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              debitis iste voluptas deserunt reprehenderit unde facere quae
              itaque nesciunt alias sequi nobis, fugiat ut, modi similique
              adipisci obcaecati quos labore.
            </p>
          </div>
        </article>
      </section>

      <section className="section-two">
        <div className="resume">
          <div className="resume-left">
            <div className="Download-button">Download | Resume</div>
            <h1>My Resume</h1>
          </div>

          <div className="resume-right">
            <img src="/assets/icons/.NETicon.png" alt=".NET Icon" />
            <img src="/assets/icons/c-sharp.png" alt="C# Icon" />
            <img src="/assets/icons/css-3.png" alt="CSS3 Icon" />
            <img src="/assets/icons/darticon.png" alt="Dart Icon" />
            <img src="/assets/icons/developer.png" alt="Developer Icon" />
            <img src="/assets/icons/fluttericon.png" alt="Flutter Icon" />
            <img src="/assets/icons/html-5.png" alt="HTML5 Icon" />
            <img src="/assets/icons/javascripticon.png" alt="JavaScript Icon" />
            <img src="/assets/icons/kotlinicon.webp" alt="Kotlin Icon" />
            <img src="/assets/icons/program.png" alt="Program Icon" />
            <img
              src="/assets/icons/springbooticon.png"
              alt="Spring Boot Icon"
            />
            <img src="/assets/icons/SQLicon.png" alt="SQL Icon" />
          </div>
        </div>

        <div className="description-resume-container">
          <div className="about-me-header">
            <h1>About Me</h1>
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
