import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Button } from "react-bootstrap";
const { aboutData } = require("./aboutData");
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { ReadMore } from "@mui/icons-material";

const AboutUs = () => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <Container fluid>
      <Card className="mx-auto" id="about-card">
        <h1 className="about-heading"> Meet the Team </h1>
        <Row className="justify-content-center">
          {aboutData.map(
            ({
              firstName,
              lastName,
              title,
              summary,
              picture,
              linkedin,
              github,
            }) => {
              return (
                <Card
                  id={flipped ? "member-card-flipped" : "member-card"}
                  key={firstName}
                >
                  <Card.Img
                    id="member-img"
                    variant="top"
                    src={picture}
                    alt={`${firstName} ${lastName}`}
                  />

                  <Card.ImgOverlay>
                    <Card.Title id="member-card-title">
                      <p id="member-name">
                        {firstName} {lastName}
                      </p>
                      <p id="member-role"> {title}</p>{" "}
                      <p id="member-read"> Read More </p>
                    </Card.Title>
                  </Card.ImgOverlay>

                  {/* <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fringilla purus ac ultricies facilisis. Integer
                        rutrum, ante et ultricies cursus, augue augue aliquet
                        orci, non feugiat diam metus sit amet eros. Nulla
                        facilisi. Mauris sit amet egestas ligula. Suspendisse
                        potenti. In hac habitasse platea dictumst. Integer sit
                        amet urna id sapien laoreet tincidunt in at felis.
                      </Card.Text> */}
                </Card>
              );
            }
          )}
        </Row>
      </Card>
    </Container>
  );
};

export default AboutUs;
