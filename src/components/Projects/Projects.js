import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sunpy from "../../Assets/Projects/sunpy.png";
import emotion from "../../Assets/Projects/emotion.png";
import DamselUndistressed from "../../Assets/Projects/Damsel.png";
import rce from "../../Assets/Projects/rce.jpg";
import routine from "../../Assets/Projects/routine.png";
import Trendsetters from "../../Assets/Projects/trendsetters.png";
import stress from "../../Assets/Projects/stress.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rce}
              isBlog={false}
              title="RCE"
              description=" A remote code execution engine built with NodeJs , supported by docker which is a server-worker-microservice architecture based code execution engine. It performs code virtualization , parellel code execution along with code isolation by code containerization."
              ghLink="https://github.com/ryuusama09/Remote-Code-Execution-Engine"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trendsetters}
              isBlog={false}
              title="TrendSetters"
              description="A webiste that scrapes the best ongoing trends from various social media platforms and provide the best trending products to users available on flipkart. Also supports reverse image search engine which allows the user to search based on an image"
              ghLink="https://github.com/https://github.com/ryuusama09/TrendSetters"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DamselUndistressed}
              isBlog={false}
              title="Damsel Undistressed"
              description="A service portal that serves as a disaster relief centre. It can detect hurricanes/storm from weather satellite images and notify users. It also acts as a community platform where organizations come up to provide relief fund in case of calamity."
              ghLink="https://github.com/ryuusama09/Damsel-Undistressed "
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sunpy}
              isBlog={false}
              title="Sunpy"
              description="An open source library solar physics. Officially contributed for major code restructuring of code including the appropriation of the world coordinate system of astropy. Resolved and merged 7+ pull requests."
              ghLink="https://github.com/ryuusama09/sunpy"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routine}
              isBlog={false}
              title="Be-Routine"
              description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets user to create and delete tasks , with an option to update the exisiting tasks as well."
              ghLink="https://github.com/ryuusama09/keep_track/tree/master"
             // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stress}
              isBlog={false}
              title="Stress-Tester"
              description="Developed a stress-test system that allows the user to check the validity of a solution , by comparing your solution with the expected solution on multiple randomly generated test-cases and provides the test-case for which your code gives the incorrect output."
              ghLink="https://github.com/ryuusama09/Stress-Testing-Setup"
                    //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
