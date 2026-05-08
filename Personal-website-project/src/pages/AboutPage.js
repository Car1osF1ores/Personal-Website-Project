import "../css/aboutMePage.css";
import "../css/Navbar.css";
import Navbar from "../components/Navbar.js";
import Resume from "../components/Resume.js";
import Icons from "../components/Icons.js";

const INFO_CARDS = [
  {
    title: "Work Experience",
    content:
      " Spring Boot, React, ASP.NET, Flutter, PostgreSQL, backend development, frontend development, microservices, JWT authentication, real-time notifications, Firebase, SQLite, Docker, RabbitMQ, Git, Agile development, clean architecture, software design patterns, team collaboration",
    link: null,
  },
  {
    title: "Projects",
    content:
      "Microservice-based moving platform, collaborative task management web application, meditation mobile app, scalable backend systems, real-time notifications, authentication systems, database integration, Flutter mobile features, React frontend development, ASP.NET backend API development, Spring Boot microservices, Firebase synchronization",
    link: "#projects",
  },
];

function InfoCard({ title, content, link }) {
  const card = (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );

  return link ? (
    <a href={link} className="info-card-link">
      {card}
    </a>
  ) : (
    card
  );
}

function HeroSection({ hideNavbar }) {
  return (
    <section className="section-one">
      {!hideNavbar && <Navbar />}
      <Icons />

      {/* Full-width stacked hero — name punches big, bio sits below */}
      <div className="hero-content">
        <div className="hero-eyebrow slide-in-top-bottom">Hello, I'm</div>
        <h1 className="hero-name slide-in-right-left">Carlos</h1>
        <p className="hero-title slide-in-top-bottom">
          <span className="fancy-word">Full-Stack Developer</span>
        </p>
        <p className="hero-bio slide-in-top-bottom">
          I've worked on full-stack web applications and RESTful APIs, building
          backend services, designing responsive frontends, and integrating
          database-driven systems. My experience includes authentication, CRUD
          operations, caching, clean architecture, and object-oriented design.
        </p>

        <a
          href="/CarlosResume.pdf"
          download="CarlosResume.pdf"
          className="Download-button"
        >
          Download Resume ↓
        </a>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="section-two">
      {/* Section label */}
      <div className="section-label">
        <span>About Me</span>
      </div>

      {/* Two-column: resume preview left, info cards right */}
      <div className="about-grid">
        <div className="resume-col">
          <Resume />
        </div>
        <div className="about-cards-col">
          {INFO_CARDS.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage({ hideNavbar = false }) {
  return (
    <div id="about">
      <HeroSection hideNavbar={hideNavbar} />
      <ResumeSection />
    </div>
  );
}

export default AboutPage;
