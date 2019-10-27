import React, { Component } from 'react';
import { SyncLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';
import './signIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrors: { email: '', password: '' },
    };
  }

  componentDidUpdate() {
    const { SignIndata } = this.props;
    const { status } = SignIndata;
    if (status) {
      const { msg, Data } = SignIndata;
      this.props.userLoading(false);
      if (status === 200) {
        this.redirectToDashboard(Data);
      }else{
        this.props.notify(msg);
      }
      this.props.clearUserData();
    }
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.userLoading(true);
    this.props.siginUser({ email, password });
  }

  blurHandler = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.validateField(name, value);
  }

  redirectToDashboard = (Data) => {
    const { token } = Data;
    localStorage.setItem('token', token);
    const { history } = this.props;
    if (history) history.push('/userDashboard');
  };

  validateField = (fieldName, value) => {
    const { formErrors } = this.state;
    let { emailValid, passwordValid } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        formErrors.email = emailValid ? null : ' email is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 5;
        formErrors.password = passwordValid ? null : ' password is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      emailValid,
      passwordValid,
      formValid: emailValid && passwordValid
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
          <input
        type="email"
        id="email"
        placeholder="email"
        color="purple darken-3"
        value={this.state.email}
        onChange={this.myChangeHandler}
        onBlur={this.blurHandler}
      />
          <div className="indicator">{this.state.formErrors.email === null ? null : this.state.formErrors.email}</div>
        </div>
        <div className="input-field col s12">
          <input
        type="password"
        id="password"
        placeholder="password"
        color="purple darken-3"
        value={this.state.password}
        onChange={this.myChangeHandler}
        onBlur={this.blurHandler}
      />
          <div className="indicator">{this.state.formErrors.password === null ? null : this.state.formErrors.password}</div>
        </div>

        <button onClick= { this.handleSubmit} className="button login deep-purple accent-4" type="submit">
          { this.props.loading
            ? (
              <SyncLoader
          sizeUnit="px"
          size={15}
          color="#ffff"
          loading={this.props.loading}
        />
            )
            : 'Sign In'
        }
        </button>
      </form>
    );
  }
}

export default withRouter(SignIn);
