import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          type={this.props.type}
          onClick={this.props.handleSubmit}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
