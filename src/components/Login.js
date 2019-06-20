import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleAddUser } from "../actions/users";
import {
  Container,
  Button,
  Form,
  Image,
  Col,
  Row,
  Figure
} from "react-bootstrap";

class Login extends Component {
  state = {
    name: "",
    user: "",
    avatarUrl: "https://sitejerk.com/images/transparent-star-gif-2.png/"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  handleChangeImage = e => {
    const { value } = e;
    this.setState(() => ({
      avatarUrl: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, user, avatarUrl } = this.state;
    const { dispatch } = this.props;

    if (name !== "") {
      dispatch(handleAddUser(name, avatarUrl));
      this.setState(() => ({
        name: "",
        avatarUrl: "https://sitejerk.com/images/transparent-star-gif-2.png/"
      }));
    } else {
      dispatch(setAuthedUser(user));
      this.setState(() => ({
        user: ""
      }));
    }
  };
  render() {
    const { name, user, avatarUrl } = this.state;
    const urls = [
      "https://sitejerk.com/images/transparent-star-gif-2.png/",
      "https://newvitruvian.com/images/transparent-toad-icon-mario.png",
      "https://www.freeiconspng.com/uploads/luma-green-icon-super-mario-18.png",
      "http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Boo-icon.png",
      "https://s.pngkit.com/png/small/94-946469_pink-mushroom-mushroom-images-mario-kart-poisons-poison.png"
    ];
    const avatar_options = urls.map(url => ({
      value: url,
      label: <Image src={url} width={40} height={40} rounded />
    }));

    return (
      <Container>
        <h2>LOGIN</h2>
        <Form className="new-form" onSubmit={this.handleSubmit}>
          <Container>Select existing account:</Container>
          <Form.Control
            as="select"
            name="user"
            value={user.id}
            onChange={this.handleChange}
          >
            <option defaultValue="">Select...</option>
            {Object.keys(this.props.users).length === 0
              ? ""
              : Object.values(this.props.users).map(user => (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                ))}
          </Form.Control>
          <Container>Not on the list? Sign up:</Container>
          <Row>
            <Col sm={4}>
              <Figure>
                <Figure.Caption>Select avatar:</Figure.Caption>
                <Select
                  name="avatarUrl"
                  placeholder={
                    <Image src={avatarUrl} width={40} height={40} rounded />
                  }
                  value={avatarUrl}
                  options={avatar_options}
                  onChange={this.handleChangeImage}
                />
              </Figure>
            </Col>
            <Col sm={8}>
              <Form.Control
                as="textarea"
                name="name"
                placeholder="Username"
                value={name}
                onChange={this.handleChange}
                className="textarea"
                row={1}
              />
            </Col>
          </Row>
          <Container>
            <Button type="submit" disabled={name === "" && user === ""}>
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(Login);
