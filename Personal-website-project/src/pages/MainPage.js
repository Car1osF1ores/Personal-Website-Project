import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/mainSinglePage.css";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "../hooks/useMediaQuery";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectPage";
import ContactMePage from "./ContactMePage";

/** Matches Navbar.css mobile breakpoint (hamburger + overlay menu) */
const MOBILE_NAV_QUERY = "(max-width: 768px)";

function MainPage() {
  const location = useLocation();
  const isMobileNav = useMediaQuery(MOBILE_NAV_QUERY);

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash, location.pathname]);

  return (
    <main
      className={`main-single-page${
        isMobileNav ? " main-single-page--mobile-nav" : ""
      }`}
    >
      {/* ── Video Background ── */}
      <div className="video-bg-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/path/to/poster-fallback.jpg"
        >
          <source src="../assets/videos/glow-background.mp4" type="video/mp4" />
          <source src="../assets/videos/glow-background.mp4" type="video/mp4" />
        </video>
      </div>

      {isMobileNav && <Navbar />}
      <HomePage hideNavbar />
      <AboutPage hideNavbar />
      <ProjectsPage hideNavbar isMobile={isMobileNav} />
      <ContactMePage hideNavbar />
    </main>
  );
}

export default MainPage;
