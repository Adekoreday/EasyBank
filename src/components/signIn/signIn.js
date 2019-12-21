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
    const { UserData, loading } = this.props;
    const { status } = UserData;
    if (status !== undefined && loading == false) {
      const { msg, Data } = UserData;
      if (status === 200) {
        this.redirectToDashboard(Data);
      }else{
        this.props.notify(msg);
        this.props.clearUserData();
      }
    }
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.formValid) return;
    const { email, password } = this.state;
    this.props.siginUser({ email, password });
  }

  blurHandler = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.validateField(name, value);
  }

  redirectToDashboard = (Data) => {
    const { token, email } = Data;
    localStorage.clear();
    localStorage.setItem('mail', email);
    localStorage.setItem('token', token);
    if(this.props.isSignedIn === true){
      const { history } = this.props;
      console.log("this is our from", this.props.from);
      if (history) history.push(this.props.from);
    }
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
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit} className="form signin__form">
        <div className="form-group">
          <input
          className="Input"
        autoComplete="off"
        type="email"
        id="email"
        placeholder="EMAIL"
        color="purple darken-3"
        value={this.state.email}
        onChange={this.myChangeHandler}
        onBlur={this.blurHandler}
      />
          <div className="indicator">{this.state.formErrors.email === null ? null : this.state.formErrors.email}</div>
        </div>
        <div className="form-group">
          <input
        className="Input"
        autoComplete="off"
        type="password"
        id="password"
        placeholder="PASSWORD"
        color="purple darken-3"
        value={this.state.password}
        onChange={this.myChangeHandler}
        onBlur={this.blurHandler}
      />
          <div className="indicator">{this.state.formErrors.password === null ? null : this.state.formErrors.password}</div>
        </div>

        <div className="form-group form-group--submit">  
        <button onClick= { this.handleSubmit} className="button submit-button" type="submit">
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
        </div>
      </form>
    );
  }
}

export default withRouter(SignIn);
