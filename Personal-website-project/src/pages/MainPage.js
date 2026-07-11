import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/mainSinglePage.css";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "../hooks/useMediaQuery";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectPage";
import ContactMePage from "./ContactMePage";
import glowBackgroundVideo from "../assets/videos/glow-background.mp4";
import posterFallback from "../assets/images/poster-fallback.jpg";

const MOBILE_NAV_QUERY = "(max-width: 768px)";

function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) return;
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash, location.pathname]);
}

function VideoBg() {
  return (
    <div className="video-bg-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterFallback}
      >
        <source src={glowBackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

function MainPage() {
  const isMobileNav = useMediaQuery(MOBILE_NAV_QUERY);
  useHashScroll();

  return (
    <main
      className={`main-single-page${
        isMobileNav ? " main-single-page--mobile-nav" : ""
      }`}
    >
      <VideoBg />

      {/*------------------------ NAV BAR ------------------------*/}

      {isMobileNav && <Navbar />}
      <HomePage hideNavbar />
      <AboutPage hideNavbar />
      <ProjectsPage hideNavbar isMobile={isMobileNav} />
      <ContactMePage hideNavbar />
    </main>
  );
}

export default MainPage;
