import React, {Component} from 'react';
import AccountHeader from '../accountHeader/accountHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllAccount} from '../../action/account';
import AllAccount from '../allAccount/allAccount';
import Spinner from '../spinners/Spinner';
import './account.css';


class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAllAccount: false,
            showCreateAccount: false
        }
    }

    ShowAllAccount = () => {    
        this.setState({
            showAllAccount: true,
            showCreateAccount: false
        })
        this.props.getAllAccount();
      }
      ShowCreateAccount = () => {    
        this.setState({
            showAllAccount: false,
            showCreateAccount: true
        })
      }
    render() {
        const {showAllAccount, showCreateAccount} = this.state;
        const { allAccount, loading, isSuccess } = this.props;
        return(
            <div className="account">
            <AccountHeader items={
                [
                    {
                        text: 'all accounts',
                        onclick: this.ShowAllAccount,
                        active: showAllAccount
                    },
                    {
                        text: 'create account',
                        onclick: this.ShowCreateAccount,
                        active: showCreateAccount
                    }
                ]
            }
            />
            {loading && <Spinner/>}
            {(showAllAccount === true && loading === false && isSuccess=== true)&& <div className="account__content"><AllAccount allAccount={allAccount}/></div>}
            {(showCreateAccount && loading === false) && <div className="account__content">This is the content to create account</div>}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { account } = state;
    const { allAccount, loading, isSuccess } = account;
    return {
        allAccount, loading, isSuccess 
    };
  };
  const mapDispatchToProps = dispatch => bindActionCreators({
    getAllAccount
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
