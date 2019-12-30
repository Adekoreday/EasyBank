import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import {getAccountTransactions} from '../../action/account';
import TransactionImg from '../../images/icons/No_Account.svg';
import Spinner from '../spinners/Spinner';
import Card from '../card/card';
import './accountDetails.css';

class AccountDetails extends Component {

    componentDidMount() {

        this.props.getAccountTransactions();
    }

    render() {
        const { location: { search } } = this.props;
        const {accountNumber, type, createdon, status}  = queryString.parse(search);
        let accountTransact=[];
        if(this.props.accountTransaction.length > 0) {
                 accountTransact =  this.props.accountTransaction.filter((x)=> {
                    return x.accountnumber == accountNumber;
                });
        }
        return(

            <div className="accountDetails__content">
                {(this.props.getAccountLoading) && <Spinner/>}
                {(this.props.getAccountLoading ===false & this.props.accountTransaction.length > 0) ? <Card
                type="transaction"
                accountNumber={accountNumber}
                types={type}
                status={status}
                createdon={createdon}
                />
                 : ''}
                 {(this.props.getAccountLoading===false & accountTransact.length>0) ? <div className="transaction__content">
                <Card type='transactionDetails'
                 accountTransact={accountTransact}
                 /> </div>:
                 null}

                {(this.props.getAccountLoading ===false & this.props.accountTransaction.length === 0) ? <div className="transaction__empty"> <div><img src={TransactionImg} alt="no transaction yet"/><p>New user visit your bank and perfom transactions</p><p>No transactions exists</p></div></div>: ''}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { account } = state;
    const {accountTransaction, isfailedGetAccountTransaction, getAccountLoading} = account;
    return {
        accountTransaction, isfailedGetAccountTransaction, getAccountLoading
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getAccountTransactions
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);