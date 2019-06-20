import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Form, Image } from "react-bootstrap";

class NavMenu extends Component {
  handleLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(setAuthedUser(null));
  };
  render() {
    const { authedUser, users } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Would you Rather...?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/add">New Question</NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/leaderboard" exact>
                Leaderboard
              </NavLink>
            </div>
          </Nav>
          {this.props.authedUser === null ? null : (
            <Form inline>
              <Navbar.Text>
                <Image
                  src={users[authedUser].avatarUrl}
                  width={70}
                  height={70}
                  rounded
                  className="menu-avatar"
                />
                Hello, {users[authedUser].name}!
              </Navbar.Text>
              <Button variant="outline-primary" onClick={this.handleLogout}>
                LOG OUT
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser.user_id,
    users: state.users
  };
}

export default connect(mapStateToProps)(NavMenu);
