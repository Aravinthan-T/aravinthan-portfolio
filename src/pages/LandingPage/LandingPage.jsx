import React, { useContext } from "react";
import "./LandingPage.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../App";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import ArticleIcon from "@mui/icons-material/Article";
import Projects from "../../components/Projects/Projects";

const LandingPage = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Aravinthan-Thangarasu-Resume.pdf";
    link.download = "Aravinthan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
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
            I build responsive, user-friendly web applications using React
          </span>
          <div className="mt-3">
            <Button
              variant="secondary"
              className="resume-button"
              onClick={downloadResume}
            >
              Download Resume
              <ArticleIcon />
            </Button>
          </div>
        </div>

        <div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
