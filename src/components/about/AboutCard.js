import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daayeng Peter </span>
            from <span className="purple"> Nandom,Upper West Region</span>
            <br />
            I am currently employed as a Junior Frontend Developer and a Sales Attendant at Jayke Computers.
            <br />
            I completed my Software Development Course at Openlabs (NIIT) Accra.
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending Time With My Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
