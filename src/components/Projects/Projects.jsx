import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import "./Projects.css";
import LastCommitDate from "../../LastCommitDate";

const projects = [
  {
    id: 1,
    title: "Calculator App",
    description: "A simple calculator built with React and MathJS",
    route: "/calculator",
  },
  {
    id: 2,
    title: "Stopwatch App",
    description: "Stopwatch app with start, stop, and reset features",
    route: "/stopwatch",
  },
  {
    id: 3,
    title: "Cams Online",
    description: "Dashboard showing online cams with filters and search",
    route: "/cams-online",
  },
  {
    id: 4,
    title: "Cams Online Using Ag-Grid",
    description:
      "Dashboard showing online cams with filters and search using Ag-Grid",
    route: "/cams-online-ag-grid",
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`projects-section ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title">My Projects</h2>
      <div>
        <LastCommitDate />
      </div>
      <Row className="g-5">
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={4}>
            <Link to={project.route} style={{ textDecoration: "none" }}>
              <Card
                className={`project-card ${darkMode ? "dark" : ""}`}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
