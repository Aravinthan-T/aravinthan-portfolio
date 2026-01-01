import React, { useContext } from "react";
import "./LandingPage.css";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../App";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

const LandingPage = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <section className="dashboard-header">
      <div className="dark-mode">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <WbSunnyTwoToneIcon /> : <DarkModeTwoToneIcon />}
        </button>
      </div>

      <div className={`landing-column ${darkMode ? "dark" : ""}`}>
        <h1>Hello, I'm Aravinthan Thangarasu</h1>
        <span>Frontend Developer</span>
        <span>
          I build responsive, user-friendly web applications using React.
        </span>
      </div>
    </section>
  );
};

export default LandingPage;
