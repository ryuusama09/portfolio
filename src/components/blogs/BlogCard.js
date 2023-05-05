import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaBloggerB } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <FaBloggerB /> &nbsp;
          { "Blog" }
        </Button>
        {"\n"}
        {"\n"}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
