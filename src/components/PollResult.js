import React, { Component } from "react";
import { Container, ProgressBar, Figure, Image } from "react-bootstrap";

class PollResult extends Component {
  render() {
    const { question, authedUser, users } = this.props;
    const { text_1, text_2 } = question;
    const choice_1_count = question.text_1_chosen_by.length;
    const choice_1 = (choice_1_count * 100) / question.answered_by.length;
    const choice_2_count = question.text_2_chosen_by.length;
    const choice_2 = (choice_2_count * 100) / question.answered_by.length;

    return (
      <div className="poll-details">
        <Container>
          {text_1}{" "}
          {question.text_1_chosen_by.includes(authedUser) && (
            <Image
              src={users[authedUser].avatarUrl}
              width={40}
              height={40}
              rounded
            />
          )}
          <Container>
            <Figure>
              <ProgressBar
                striped
                variant="info"
                now={choice_1}
                label={`${choice_1}%`}
              />
              <Figure.Caption>
                {choice_1_count} {choice_1_count === 1 ? "person" : "people"}{" "}
                answered this.
              </Figure.Caption>
            </Figure>
          </Container>
        </Container>
        <b>OR</b>
        <Container>
          {text_2}?{" "}
          {question.text_2_chosen_by.includes(authedUser) && (
            <Image
              src={users[authedUser].avatarUrl}
              width={40}
              height={40}
              rounded
            />
          )}
          <Container>
            <Figure>
              <ProgressBar
                striped
                variant="warning"
                now={choice_2}
                label={`${choice_2}%`}
              />
              <Figure.Caption>
                {choice_2_count} {choice_2_count === 1 ? "person" : "people"}{" "}
                answered this.
              </Figure.Caption>
            </Figure>
          </Container>
        </Container>
      </div>
    );
  }
}

export default PollResult;
