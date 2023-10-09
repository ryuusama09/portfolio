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
import imgress from "../../Assets/Projects/imgress.png"
import cache from "../../Assets/Projects/cache.jpg"
import ss from "../../Assets/Projects/ss.ai.jpeg"
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
              imgPath={imgress}
              isBlog={false}
              title="Imgress"
              description="A stop solution to create, manage and deploy and automate the process of creating your image search engine instances powered by highly accurate vector search databases and img2-vec neural networks layered above resnet50. It comes with highly efficient microservices architecture with serverless computing"
             ghLink = "https://github.com/ryuusama09/Imgress"
             demoLink="https://img-ress.netlify.app/"
              
            />
          </Col>
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
              imgPath={ss}
              isBlog={false}
              title="SoulSupport.ai"
              description="A one stop destination for your overall mental health support. Powered by a conversational AI based on fintetuned falcon 7B on mental health dataset. It provides Real time smart doctor recommendation , Diet plan generation , User Report generation , stress detection prompts and many other features which makes it a futuristic application"
              ghLink="https://github.com/ryuusama09/virtual_assistant"
             // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cache}
              isBlog={false}
              title="GoCache"
              description="GoCache is a multi-layered caching written in Golang. It enables caching and negative caching with TTLs. It is also customized to prevent dogpile effect in caching"
              ghLink="https://github.com/ryuusama09/GoCache"
             // <--------Please include a demo link here
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


          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
