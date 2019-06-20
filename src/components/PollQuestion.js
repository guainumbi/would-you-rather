import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
import { handleAnswerSubmit } from "../actions/shared";

class PollQuestion extends Component {
  state = {
    answer: null
  };

  handleChange = e => {
    const choice = e.target.value;
    this.setState(() => ({
      answer: choice
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, question } = this.props;
    dispatch(handleAnswerSubmit(this.state.answer, question.id));
  };

  render() {
    const { question } = this.props;
    const { text_1, text_2 } = question;
    return (
      <div className="poll-details">
        <Form onSubmit={this.handleSubmit}>
          <Form.Check
            type="radio"
            name="choiceOption"
            label={text_1}
            value={text_1}
            onChange={this.handleChange}
          />
          <b>OR</b>
          <Form.Check
            type="radio"
            name="choiceOption"
            label={text_2}
            value={text_2}
            onChange={this.handleChange}
          />
          <Container>
            <Button type="submit" disabled={this.state.answer === null}>
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps)(PollQuestion);
