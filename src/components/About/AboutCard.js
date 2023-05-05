import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am  <span className="purple">Harsh Shah </span>
            from <span className="purple">Mumbai, India.</span>
            <br />I am a third year engineering student pursuing btech in CSE from,
             DJ Sanghvi college of engineering
            <br />
            <br />
            Other things that define me are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hardcore PC gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Freestlye art
            </li>
            <li className="about-activity">
              <ImPointRight /> Weeb
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "apply a dfs until you find your favourite domain"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
