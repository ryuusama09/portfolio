import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiKeras,
  SiTensorflow,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
    </Row>
  );
}

export default Techstack;
