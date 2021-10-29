import React, { Component } from "react";

import "./style.css";

class Input extends Component {
  render() {
    const { type, placeholder, value, handleChange, id, min, max, step } =
      this.props;
    return (
      <div>
        <input
          className="form-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          id={id}
          min={min}
          max={max}
          step={step}
        />
      </div>
    );
  }
}

export default Input;
