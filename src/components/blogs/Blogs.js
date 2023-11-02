import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard"
import opensource from "../../Assets/Projects/sunpy.png";
import venice from "../../Assets/Projects/venice.jpg";
import rceblog from "../../Assets/Projects/rceblog.jpg";
import webrtc from "../../Assets/Projects/webrtc.png";
import smawk from "../../Assets/Projects/smawk.avif";
import weaviate from "../../Assets/Projects/ww.png";
import imgress from "../../Assets/Projects/imgress.png"
import openapi from "../../Assets/Projects/openai.png"
import per from "../../Assets/Projects/the_basic.png"

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
             imgPath={webrtc}
              isBlog={false}
              title="ShallowDive WebRTC"
            //  description=" A remote code execution engine built with NodeJs , supported by docker which is a server-worker-microservice architecture based code execution engine. It performs code virtualization , parellel code execution along with code isolation by code containerization."
              ghLink="https://ryuusama.hashnode.dev/shallowdive-into-webrtc"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
             imgPath={rceblog}
              isBlog={false}
              title="How to build an efficient RCE"
             // description="A webiste that scrapes the best ongoing trends from various social media platforms and provide the best trending products to users available on flipkart. Also supports reverse image search engine which allows the user to search based on an image"
              ghLink="https://ryuusama.hashnode.dev/remote-code-execution-engine"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
              imgPath={smawk}
            
              title="SMAWK alogrithm"
            //  description="A service portal that serves as a disaster relief centre. It can detect hurricanes/storm from weather satellite images and notify users. It also acts as a community platform where organizations come up to provide relief fund in case of calamity."
              ghLink="https://medium.com/@shahh8138/smawk-algorithm-242fa751baab"
                         
            />
          </Col>
          
          <Col md={4} className="project-card">
            <BlogCard
             imgPath={per}
              isBlog={false}
              title="Persistent Arrays"
             // description="An open source library solar physics. Officially contributed for major code restructuring of code including the appropriation of the world coordinate system of astropy."
              ghLink="https://medium.com/@shahh8138/persistent-arrays-c0a1a7f851ad"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
             imgPath={venice}
              isBlog={false}
              title="Venice Sets"
             // description="An open source library solar physics. Officially contributed for major code restructuring of code including the appropriation of the world coordinate system of astropy."
              ghLink="https://medium.com/@shahh8138/venice-sets-fec34cad6713"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
              imgPath={opensource}
              isBlog={false}
              title="How I jump Started into Open Source"
             // description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets"
              ghLink="https://ryuusama.hashnode.dev/sunpy-your-way-to-solar-physics"
             // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={weaviate}
              isBlog={false}
              title="Vector Databases & Weaviate"
             // description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets"
              ghLink="https://ryuusama.hashnode.dev/vector-databases-weaviate"
             // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={imgress}
              isBlog={false}
              title="How I built Imgress"
             // description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets"
              ghLink="https://ryuusama.hashnode.dev/how-i-built-imgress"
             // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={openapi}
              isBlog={false}
              title="Connect Azure Openapi to Nodejs"
             // description="A note down app , built with NodeJs as backend integrated with mongoDB to store data. A user-friendly UI made by html and css3. Lets"
              ghLink="https://ryuusama.hashnode.dev/connect-azure-openapi-with-nodejs-via-python"
             // <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
