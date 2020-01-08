import React, { Component } from 'react';
import AccountHeader from '../accountHeader/accountHeader';
import { SyncLoader } from 'react-spinners';
import Select from 'react-select';
import {postTransact} from '../../action/transaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './transaction.css';

class Transaction extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: null,
            account: null,
            selectedOption: null,
            selectedOptionValid: false,
            accountValid: false,
            amountValid: false,
            formValid: false,
            options: [
                { value: 'credit', label: 'CREDIT' },
                { value: 'debit', label: 'DEBIT' }
              ],
            formErrors: { amount: null, account: null, transactionType: null }
        }
    }

    componentDidUpdate(prevProps) {
      if(prevProps.transactionDetails !== this.props.transactionDetails && (Object.keys(this.props.transactionDetails).length > 0)){
        this.props.notify(`${this.props.transactionDetails.Transactiontype} transaction successful balance: #${this.props.transactionDetails.accountBalance}`);
      }
      else if(prevProps.isFailureTransactDetails !== this.props.isFailureTransactDetails &&  Object.keys(this.props.isFailureTransactDetails).length !==0) {
        this.props.notify(`Transaction failed ${this.props.isFailureTransactDetails.data}`);
      }
    }

    blurHandler = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        this.validateField(name, value);
      }
      
    inputChangeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value });
      }

      handleSelect = selectedOption => {
        this.setState({ selectedOption });
        this.validateField('selectInput', selectedOption.value);
      };

      handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.formValid) return;
        const {amount, account, selectedOption} = this.state;
        const option = selectedOption.value;
        const details ={
          amount
        }
        this.props.postTransact(details, account, option);
      }     

      validateField = (fieldName, value) => {
        const { formErrors } = this.state;
        let { accountValid, amountValid, selectedOptionValid } = this.state;
    
        switch (fieldName) {
          case 'amount':
            amountValid = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(value);
            formErrors.amount = amountValid ? null : 'amount must be positive numbers';
            break;
            case 'account':
                accountValid = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(value);
                if(accountValid === true) {
                    accountValid = value.toString().length === 10 ? true : false;
                }
                formErrors.account = accountValid ? null : 'account number not valid ';
                break;
            case 'selectInput':
              selectedOptionValid = value.length >= 3;
              formErrors.transactionType = selectedOptionValid ? null : 'kindly select a valid option';
              break;
          default:
            break;
        }
        this.setState({
          formErrors,
          accountValid,
          amountValid,
          selectedOptionValid,
          formValid: selectedOptionValid && accountValid && amountValid
        });
        console.log("updated state", this.state);
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
            <div className="user__transaction">
                    <AccountHeader
                items={
                [
                    {
                        text: 'Transaction',
                        onclick: () => {},
                        active: true
                    }
                ]
            }        
            />
        <div className='transactionAccountContainer'>
             <form onSubmit={this.handleSubmit} className="create__account__form">
     <div className="form-group">       
            <input
            className="Input"
            autoComplete="off"
            type="number"
            id="account"
            placeholder="ACCOUNT NUMBER"
            value={this.state.account}
            onChange={this.inputChangeHandler}
            onBlur={this.blurHandler}
          />
           <div className="indicator">{this.state.formErrors.account === null ? null : this.state.formErrors.account}</div>
          </div> 
            <div className="form-group">       
            <input
            className="Input"
            autoComplete="off"
            type="number"
            id="amount"
            placeholder="AMOUNT"
            value={this.state.amount}
            onChange={this.inputChangeHandler}
            onBlur={this.blurHandler}
          />
            <div className="indicator">{this.state.formErrors.amount === null ? null : this.state.formErrors.amount}</div>
          </div> 
          <div className="form-group">
              <Select
              styles={style}
              className="select"
              placeholder="TRANSACTION TYPE"
              value={selectedOption}
             onChange={this.handleSelect}
             options={this.state.options}
            />
            <div className="indicator">{this.state.formErrors.transactionType === null ? null : this.state.formErrors.transactionType}</div>
            </div>
            <div className="form-group form-group--submit">  
            <button className="button create__account submit-button" onClick= {this.handleSubmit} type="submit">
              { this.props.isloadingTransaction
                ? (
              <SyncLoader
              sizeUnit="px"
              size={15}
              color="#ffff"
              loading={this.props.isloadingTransaction}
            />
                )
                : 'Submit'
            }
              </button>
             </div>
           </form>
          </div>
     </div>
        )
    }
}
const mapStateToProps = (state) => {
    const {transaction} = state;
    const {transactionDetails, isloadingTransaction, isFailureTransactDetails} = transaction;
    return {transactionDetails, isloadingTransaction, isFailureTransactDetails};
}
const mapDispatchToProps = dispatch => bindActionCreators({
    postTransact
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);