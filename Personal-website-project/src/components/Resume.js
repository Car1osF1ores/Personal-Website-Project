import { useState } from "react";
import "../css/Resume.css"; // Import the CSS file

function Resume() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
      }}
    >
      <img
        className="Resume"
        src="/assets/images/Resume.png"
        alt="Resume"
        onClick={() => setIsExpanded(true)}
        style={{
          cursor: "pointer",
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
        }}
      />

      {isExpanded && (
        <div
          onClick={() => setIsExpanded(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
            padding: 0,
            margin: 0,
          }}
        >
          <img
            src="/assets/images/Resume.png"
            alt="Resume Expanded"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              cursor: "zoom-out",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Resume;
