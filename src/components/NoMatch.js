import React from "react";
import { Container, Figure } from "react-bootstrap";

export default function NoMatch() {
  return (
    <Container>
      <h2>404 - PAGE NOT FOUND</h2>
      <Container>
        <Figure>
          <Figure.Caption>
            The page you are looking for does not exist. But here's a puppy.
          </Figure.Caption>
          <Figure.Image src="puppy.jpg" width={400} height={400} rounded />
        </Figure>
      </Container>
    </Container>
  );
}
