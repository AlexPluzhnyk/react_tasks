import React, { Component } from "react";
import "./style.css";

import Input from "../components/input/Input";

class HomeWork2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 1,
    };
  }
  handleChange = ({ target }) => {
    this.setState({ rangeValue: target.value });
  };
  render() {
    return (
      <div>
        <div className="number-one">
          <Input
            type="range"
            min="1"
            max="100"
            step="1"
            value={this.state.rangeValue}
            handleChange={this.handleChange}
          ></Input>
          <Input
            type="text"
            handleChange={this.handleChange}
            value={this.state.rangeValue}
          ></Input>
        </div>
        <div className="number-two"></div>
      </div>
    );
  }
}

export default HomeWork2;
