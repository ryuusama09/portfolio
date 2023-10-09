import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSublimetext,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGithub,
  SiDocker,
  SiNetlify,
  SiSelenium
} from "react-icons/si";
import {FaArrowsAlt, FaAws} from "react-icons/fa"
import {BiGitBranch} from "react-icons/bi"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiGitBranch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
    </Row>
  );
}

export default Toolstack;
