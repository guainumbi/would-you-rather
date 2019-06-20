import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Leaderboard(props) {
  return (
    <Container>
      <h3>LEADERBOARD</h3>
      {Object.values(props.users)
        .sort(function(a, b) {
          const sum_a = a.asked_polls.length + a.answered_polls.length;
          const sum_b = b.asked_polls.length + b.answered_polls.length;
          return sum_a > sum_b ? -1 : sum_a < sum_b ? 1 : 0;
        })
        .map(user => (
          <div key={user.id} className="card card-body">
            <Row>
              <Col sm={4}>Name: {user.name}</Col>
              <Col sm={8}>
                <h4>Achievements</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Image src={user.avatarUrl} width={70} height={70} rounded />
              </Col>
              <Col sm={8}>
                <h6>Asked Questions: {user.asked_polls.length}</h6>
                <h6>Answered Questions: {user.answered_polls.length}</h6>
              </Col>
            </Row>
          </div>
        ))}
    </Container>
  );
}
