import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import Poll from "./Poll";

class Home extends Component {
  render() {
    const { questions, authedUser, location } = this.props;
    let questionsArray = Object.values(questions).sort(function(a, b) {
      return b.timestamp - a.timestamp;
    });
    return (
      <Container className="home-component">
        <h2>HOME</h2>
        <Container>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Unanswered Polls</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Answered Polls</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {questionsArray.map(
                      question =>
                        question.answered_by.includes(authedUser) === false && (
                          <Container key={question.id}>
                            <Poll
                              question={question}
                              authedUser={authedUser}
                              location={location}
                            />
                          </Container>
                        )
                    )}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {questionsArray.map(
                      question =>
                        question.answered_by.includes(authedUser) && (
                          <Container key={question.id}>
                            <Poll
                              question={question}
                              authedUser={authedUser}
                              location={location}
                            />
                          </Container>
                        )
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser.user_id,
    users: state.users,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Home);
