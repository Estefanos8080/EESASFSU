import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Coming soon <span className="purple"></span>
            <span className="purple"> ETH/ERI</span>
            <br /> 
            <br />
            <br />
            Activates:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Buna
            </li>
            <li className="about-activity">
              <ImPointRight /> injera be shero
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitfo
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          {" "}
          </p>
          <footer className="blockquote-footer">Ethiopia/Eritrea</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
