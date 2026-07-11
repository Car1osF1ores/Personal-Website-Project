import "../css/icons.css";

import netIcon from "../assets/icons/NETicon.png";
import cSharpIcon from "../assets/icons/c-sharp.png";
import css3Icon from "../assets/icons/css-3.png";
import dartIcon from "../assets/icons/darticon.png";
import developerIcon from "../assets/icons/developer.png";
import flutterIcon from "../assets/icons/fluttericon.png";
import html5Icon from "../assets/icons/html-5.png";
import javascriptIcon from "../assets/icons/javascripticon.png";
import kotlinIcon from "../assets/icons/kotlinicon.webp";
import programIcon from "../assets/icons/program.png";
import springbootIcon from "../assets/icons/springbooticon.png";
import sqlIcon from "../assets/icons/SQLicon.png";

function Icons() {
  return (
    <div className="Icons-container">
      <img src={netIcon} alt=".NET Icon" />
      <img src={cSharpIcon} alt="C# Icon" />
      <img src={css3Icon} alt="CSS3 Icon" />
      <img src={dartIcon} alt="Dart Icon" />
      <img src={developerIcon} alt="Developer Icon" />
      <img src={flutterIcon} alt="Flutter Icon" />
      <img src={html5Icon} alt="HTML5 Icon" />
      <img src={javascriptIcon} alt="JavaScript Icon" />
      <img src={kotlinIcon} alt="Kotlin Icon" />
      <img src={programIcon} alt="Program Icon" />
      <img src={springbootIcon} alt="Spring Boot Icon" />
      <img src={sqlIcon} alt="SQL Icon" />
    </div>
  );
}

export default Icons;
