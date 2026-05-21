import React from "react";
import HERO_DESCRIPTION from "../data/HeroDescription";
import HERO_HEADINGS from "../data/HeroHeadings";

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

export default HeroText;
