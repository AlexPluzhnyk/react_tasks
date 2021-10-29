import React, { Component } from "react";
import "./style.css";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onActive: true,
    };
  }
  hendleClick = ({ target }) => {
    if (this.state.onActive) {
      target.className = "circle-run";
      this.setState({ onActive: false });
    }
  };

  render() {
    return (
      <div className="circle-box">
        <div className="circle" onClick={this.hendleClick}></div>
      </div>
    );
  }
}
export default Circle;
