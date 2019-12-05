import React, { Component } from 'react';
import Select from 'react-select';
import { SyncLoader } from 'react-spinners';
import './createAccount.css';

class createAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        amount: null,
        selectedOption: null,
        selectedOptionValid: false,
        accountValid: false,
        options: [
          { value: 'current', label: 'CURRENT' },
          { value: 'savings', label: 'SAVINGS' },
          { value: 'loan', label: 'LOAN' },
        ],
        formValid: false,
        formErrors: { amount: null, accountType: null },
      };
    }
    inputChangeHandler = (event) => {
      this.setState({ [event.target.id]: event.target.value });
    }

    componentDidUpdate(prevProps) {
      if(prevProps.createdAccount !== this.props.createdAccount && (Object.keys(this.props.createdAccount).length > 0)){
        this.props.notify(` A new account was created with account number ${this.props.createdAccount.Data.accountnumber} `);
      }
      else if(prevProps.isfailedCreateAccount !== this.props.isfailedCreateAccount &&  Object.keys(this.props.isfailedCreateAccount).length !==0) {
        this.props.notify(`${this.props.isfailedCreateAccount.msg} `);
      }
    }

    handleSelect = selectedOption => {
      this.setState({ selectedOption });
      this.validateField('selectInput', selectedOption.value);
    };

    validateField = (fieldName, value) => {
      const { formErrors } = this.state;
      let { accountValid, selectedOptionValid } = this.state;
  
      switch (fieldName) {
        case 'amount':
          accountValid = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(value);
          formErrors.account = accountValid ? null : ' account must be positive numbers';
          break;
          case 'selectInput':
            selectedOptionValid = value.length >= 3;
            formErrors.accountType = selectedOptionValid ? null : 'kindly select a valid option';
            break;
        default:
          break;
      }
      this.setState({
        formErrors,
        accountValid,
        selectedOptionValid,
        formValid: selectedOptionValid && accountValid
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.formValid) return;
        const details ={
          balance: this.state.amount,
          Type: this.state.selectedOption.value
        }
        this.props.createAccounts(details);
      }

      blurHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        this.validateField(name, value);
      }

    render() {
      const { selectedOption } = this.state;
      const style = {
        control: (base, state) => ({
          ...base,
          border: state.isFocused ? 0 : 0,
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            border: state.isFocused ? 0 : 0
          }
        })
      };
        return (
            <div className='createAccountContainer'>
      
          <form onSubmit={this.handleSubmit} className="create__account__form">
              <div className="form-group">
              <Select
              styles={style}
              className="select"
              placeholder="ACCOUNT TYPE"
              value={selectedOption}
             onChange={this.handleSelect}
             options={this.state.options}
            />
            <div className="indicator">{this.state.formErrors.accountType === null ? null : this.state.formErrors.accountType}</div>
            </div>
            <div className="form-group">       
            <input
            className="Input"
            autoComplete="off"
            type="number"
            id="amount"
            placeholder="OPENING BALANCE"
            value={this.state.email}
            onChange={this.inputChangeHandler}
            onBlur={this.blurHandler}
          />
           <div className="indicator">{this.state.formErrors.account === null ? null : this.state.formErrors.account}</div>
          </div> 
          <div className="form-group form-group--submit">  
            <button className="button submit-button" onClick= {this.handleSubmit} type="submit">
              { this.props.loading
                ? (
              <SyncLoader
              sizeUnit="px"
              size={15}
              color="#ffff"
              loading={this.props.loading}
            />
                )
                : 'Create Account'
            }
            </button>
            </div>
          </form>
          </div>
        );
      }
    }

export default createAccount;