import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import BlogCard from "./BlogCard"

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the blogs i've written...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCard
           //   imgPath={rce}
              isBlog={false}
              title="RCE"
              description=" A remote code execution engine built with NodeJs , supported by docker which is a server-worker-microservice architecture based code execution engine. It performs code virtualization , parellel code execution along with code isolation by code containerization."
              ghLink="https://github.com/ryuusama09/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
            //  imgPath={Trendsetters}
              isBlog={false}
              title="TrendSetters"
              description="A webiste that scrapes the best ongoing trends from various social media platforms and provide the best trending products to users available on flipkart. Also supports reverse image search engine which allows the user to search based on an image"
              ghLink="https://github.com/https://github.com/ryuusama09/TrendSetters"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
            //  imgPath={DamselUndistressed}
              isBlog={false}
              title="Damsel Undistressed"
              description="A service portal that serves as a disaster relief centre. It can detect hurricanes/storm from weather satellite images and notify users. It also acts as a community platform where organizations come up to provide relief fund in case of calamity."
              ghLink="https://github.com/ryuusama09/Damsel-Undistressed "
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
             // imgPath={Sunpy}
              isBlog={false}
              title="Sunpy"
              description="An open source library solar physics. Officially contributed for major code restructuring of code including the appropriation of the world coordinate system of astropy."
              ghLink="https://github.com/sunpy"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
             // imgPath={routine}
              isBlog={false}
              title="Be-Routine"
              description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
             // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
             // imgPath={routine}
              isBlog={false}
              title="Stress-Tester"
              description="Developed a stress-test system that allows the user to check the validity of a solution , by comparing your solution with the expected solution on multiple randomly generated test-cases and provides the test-case for which your code gives the incorrect output."
              ghLink="https://github.com/"
                    //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
