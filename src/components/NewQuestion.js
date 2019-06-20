import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { Container, Button, Form } from "react-bootstrap";

class NewQuestion extends Component {
  state = {
    text_1: "",
    text_2: ""
  };

  handleChange = e => {
    const text = e.target.value;

    if (e.target.name === "text_1") {
      this.setState(() => ({
        text_1: text
      }));
    } else {
      this.setState(() => ({
        text_2: text
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text_1, text_2 } = this.state;
    const { dispatch, history } = this.props;

    dispatch(handleAddQuestion(text_1, text_2));

    this.setState(() => ({
      text_1: "",
      text_2: ""
    }));

    history.push("/");
  };
  render() {
    const { text_1, text_2 } = this.state;
    return (
      <Container>
        <h2>NEW QUESTION</h2>
        <Container>Would you rather</Container>
        <Form className="new-form" onSubmit={this.handleSubmit}>
          <Form.Control
            as="textarea"
            name="text_1"
            placeholder="Enter Option 1"
            value={text_1}
            onChange={this.handleChange}
            className="textarea"
          />
          <Container>OR</Container>
          <Form.Control
            as="textarea"
            name="text_2"
            placeholder="Enter Option 2"
            value={text_2}
            onChange={this.handleChange}
            className="textarea"
          />
          <div>
            <Button type="submit" disabled={text_1 === "" || text_2 === ""}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(connect()(NewQuestion));
