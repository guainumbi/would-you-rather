import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

class PollSummary extends Component {
  render() {
    const { text_1, text_2, id, question } = this.props;
    return (
      <div className="poll-details">
        {text_1} <b>OR</b> {text_2} ?
        <Container>
          <Button>
            <Link
              to={{
                pathname: `/questions/${id}`,
                state: { question }
              }}
              className="btn-link"
            >
              View Poll
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default PollSummary;
