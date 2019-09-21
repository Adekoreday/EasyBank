/* eslint-disable react/prop-types */
import React, { Component } from 'react';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.siginUser({ ...this.state });
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <div className="input-field col s12">
          <input
        type="text"
        id="firstName"
        color="purple darken-3"
        value={this.state.email}
        onChange={this.myChangeHandler}
      />
          <label htmlFor="firstName">firstName</label>
        </div>
        <div className="input-field col s12">
          <input
        type="text"
        id="lastName"
        color="purple darken-3"
        value={this.state.email}
        onChange={this.myChangeHandler}
      />
          <label htmlFor="lastName">lastName</label>
        </div>
        <div className="input-field col s12">
          <input
        type="email"
        id="email"
        color="purple darken-3"
        value={this.state.email}
        onChange={this.myChangeHandler}
      />
          <label htmlFor="email">email</label>
        </div>
        <div className="input-field col s12">
          <input
        type="password"
        id="password"
        color="purple darken-3"
        value={this.state.password}
        onChange={this.myChangeHandler}
      />
          <label htmlFor="password">password</label>
        </div>
        <button className="button login deep-purple accent-4" type="submit">Sign Up</button>
      </form>
    );
  }
}
export default SignIn;
