import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="password" placeholder="password" />
      </div>
    );
  }
}

export default Validator;
