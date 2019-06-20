import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import NavMenu from "./NavMenu";
import Home from "./Home";
import Poll from "./Poll";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        {this.props.authedUser === true ? (
          <Login />
        ) : (
          <Router>
            <Fragment>
              <NavMenu />
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route
                path="/leaderboard"
                render={() => <Leaderboard users={this.props.users} />}
              />
              <Route path="/questions/:id" component={Poll} />
            </Fragment>
          </Router>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser.user_id === null,
    users: state.users
  };
}

export default connect(mapStateToProps)(App);
