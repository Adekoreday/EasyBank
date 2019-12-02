import React, { Component } from 'react';
import Select from 'react-select';
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

    handleSelect = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };


    validateField = (fieldName, value) => {
      const { formErrors } = this.state;
      let { accountValid, selectedOptionValid } = this.state;
  
      switch (fieldName) {
        case 'account':
          accountValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
          formErrors.account = accountValid ? null : ' account must be positive numbers';
          break;
          case 'selectInput':
            selectedOptionValid = value.length >= 5;
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
        console.log('the state value', this.state)
        if(!this.state.formValid) return;
        console.log('this is submitting');
      }

      handleSelect = (selectedOption) => {
        this.setState({ selectedOption });
        console.log('this has changed');
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
              </div>
             <div className="form-group">       
            <input
            className="Input"
            autoComplete="off"
            type="text"
            id="text"
            placeholder="OPENING BALANCE"
            value={this.state.email}
            onChange={this.myChangeHandler}
            onBlur={this.blurHandler}
          />
          </div> 
          <div className="form-group form-group--submit">  
            <button className="button submit-button" onClick= { this.handleSubmit} type="submit">
              { this.props.loading
                ? (
              <SyncLoader
              sizeUnit="px"
              size={15}
              color="#ffff"
              loading={this.props.loading}
              options={this.state.options}
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