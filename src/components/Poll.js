import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PollSummary from "./PollSummary";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import { Container, Row, Col, Figure } from "react-bootstrap";

class Poll extends Component {
  render() {
    const { question } =
      this.props.location.state === undefined
        ? this.props
        : this.props.location.state;

    if (question !== undefined) {
      if (this.props.questions[question.id] === undefined) {
        return <Redirect to="/404" />;
      }
    } else {
      return <Redirect to="/404" />;
    }

    const { authedUser, users, location, questions } = this.props;
    const asked_by = users[question.asked_by].name;
    const { text_1, text_2, id } = question;
    return (
      <Container>
        <div className="card card-body">
          <Row>
            <Col sm={4}>Asked by:</Col>
            <Col sm={8}>
              <h4>Would You Rather</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Figure>
                <Figure.Image
                  src={users[question.asked_by].avatarUrl}
                  width={70}
                  height={70}
                  rounded
                />
                <Figure.Caption>{asked_by}</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={8}>
              {location.pathname === "/" ? (
                <PollSummary
                  text_1={text_1}
                  text_2={text_2}
                  id={id}
                  question={question}
                  authedUser={authedUser}
                  location={location}
                />
              ) : questions[id].answered_by.includes(authedUser) === false ? (
                <PollQuestion question={question} />
              ) : (
                <PollResult
                  question={questions[id]}
                  authedUser={authedUser}
                  users={users}
                />
              )}
            </Col>
          </Row>
        </div>
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

export default connect(mapStateToProps)(Poll);
