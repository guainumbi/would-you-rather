import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import NavMenu from "./NavMenu";
import Home from "./Home";
import Poll from "./Poll";
import Leaderboard from "./Leaderboard";
import NoMatch from "./NoMatch";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        {this.props.auth === true ? (
          <Login />
        ) : (
          <Router>
            <NavMenu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route
                path="/leaderboard"
                render={() => <Leaderboard users={this.props.users} />}
              />
              <Route path="/questions/:id" component={Poll} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    auth: authedUser.user_id === null,
    users
  };
}

export default connect(mapStateToProps)(App);
