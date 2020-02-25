import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountHeader from '../accountHeader/accountHeader';
import Spinner from '../spinners/Spinner';
import { getAllUsersAccount } from '../../action/account';
import AllAccount from '../allAccount/allAccount';
import './allUserAccount.css';

class AllUserAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllUsersAccount();
  }

  render() {
    const {
      allUsersAccount, isallUserAccountLoading, isfailedAllUsersAccounts,
      isSuccessAllUsersAccount
    } = this.props;
    return (
      <div className="users__account">
        <AccountHeader items={
                [
                  {
                    text: 'all accounts',
                    onclick: () => {},
                    active: true
                  },
                ]
            }
            />
        <div className="users__account__content">
          <AllAccount
                allAccount={allUsersAccount}
                loading={isallUserAccountLoading}
                isfailedAllAccount={isfailedAllUsersAccounts}
                isSuccess={isSuccessAllUsersAccount}
                />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { account } = state;
  const {
    allUsersAccount, isallUserAccountLoading, isfailedAllUsersAccounts,
    isSuccessAllUsersAccount
  } = account;
  return {
    allUsersAccount,
    isallUserAccountLoading,
    isfailedAllUsersAccounts,
    isSuccessAllUsersAccount
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllUsersAccount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllUserAccount);
