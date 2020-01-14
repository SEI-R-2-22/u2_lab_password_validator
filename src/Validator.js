import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" id="username" />
          <label htmlFor="username">Username</label>

          <input type="password" placeholder="Password" id="password" />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="confirm-password"
          />
          <label htmlFor="confirm-password">Confirm password</label>

          <button type="submit">Sign Up</button>
          <p>Passwords must match.</p>
        </form>
      </div>
    );
  }
}

export default Validator;
