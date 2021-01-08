import React, { useState } from 'react';
import './Validator.css';

function Validator () {
  const intialState = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  const [formState, setFormState] = useState(intialState)
  const [valid, setValid] = useState(null);
  const [message, setMessage] = useState('Passwords must match');


  // when a form is going to be submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    // do something
    if (formState.password === formState.passwordConfirm) {
      setValid(true);
      setMessage('Passwords are a match!')
    } else {
      setValid(false);
      setMessage('Passwords mismatch!')
    }

    // reset the form
    setFormState(intialState);
  }


  const handleChange = (event) => {
    //set the form state and new object that will contain all the values from the current form state plus the value from whatever element that changes and it's id should be used as the value property update and get it's value
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            value={formState.username}
          />
          <label htmlFor="username">Username</label>

          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            value={formState.password}/>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            onChange={handleChange}
            value={formState.passwordConfirm}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit">Sign Up</button>
          <p className={ valid ? 'valid' : 'invalid' }>{message}</p>
        </form>
      </div>
    );
}

export default Validator;
