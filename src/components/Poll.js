import React, { Component } from "react";
import { connect } from "react-redux";
import PollSummary from "./PollSummary";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import { Row, Col, Figure } from "react-bootstrap";

class Poll extends Component {
  render() {
    const { question } =
      this.props.location.state === undefined
        ? this.props
        : this.props.location.state;
    const { authedUser, users, location, questions } = this.props;
    const asked_by = users[question.asked_by].name;
    const { text_1, text_2, id } = question;
    return (
      <div className="poll-component">
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
                question={question}
                authedUser={authedUser}
                users={users}
              />
            )}
          </Col>
        </Row>
      </div>
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
