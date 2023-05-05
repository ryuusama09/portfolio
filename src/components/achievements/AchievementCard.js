import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function AchievementCard(props) {
  return (
    <Card className="achievement-card-view">
      <Card.Img variant="top" src={props.imgPath} style = {{opacity :"1"}} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {props.Link &&(<Button variant="primary" href={props.Link} target="_blank">
          <FiExternalLink /> &nbsp;
          {"proceed"}
        </Button>)
        }
          
   
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
