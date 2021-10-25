import React, { Component } from "react";
import "./style.css";

import Input from "../input/Input";
import Button from "../button/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    const { name, email, password } = this.state;
    if (!name && !email & !password) {
      e.preventDefault();
      return;
    }
    const newUser = { name, email, password };
    const userJson = JSON.stringify(newUser);

    localStorage.setItem("newUser", userJson);

    console.log(newUser);
    this.setState({
      name: "",
      password: "",
      email: "",
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };

  render() {
    return (
      <div className="form-box">
        <h1>{this.props.title}</h1>
        <form className="form">
          <Input
            type="text"
            placeholder="Enter name"
            handleChange={this.handleChange}
            value={this.state.name}
            id="name"
          ></Input>
          <Input
            type="password"
            placeholder="Enter password"
            handleChange={this.handleChange}
            value={this.state.password}
            id="password"
          ></Input>
          <Input
            type="text"
            placeholder="Enter email"
            handleChange={this.handleChange}
            value={this.state.email}
            id="email"
          ></Input>
          <Button
            type="submit"
            handleSubmit={this.handleSubmit}
            name="Enter"
          ></Button>
        </form>
      </div>
    );
  }
}

export default Form;
