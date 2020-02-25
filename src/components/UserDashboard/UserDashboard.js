import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from '../sideNav';
import Account from '../account/account';
import Profile from '../profile/profile';
import AllUserAccount from '../allUserAccount/allUserAccount';
import Analytics from '../Analytics/analytics';
import Transaction from '../Transaction/transaction';
import Activate from '../activate/activate';
import About from '../about/about';
import AccountImg from '../../images/icons/ecommerce_graph2.svg';
import ActivateImg from '../../images/icons/activate.svg';
import AllAccountImg from '../../images/icons/allAccounts.svg';
import TransactImg from '../../images/icons/transaction.svg';
import LogoutImg from '../../images/icons/logout.svg';
import ProfileImg from '../../images/icons/perm_identity-24px.svg';
import { clearFromStorage } from '../../helpers/storage';
import TransactionImg from '../../images/icons/ecommerce_dollar.svg';
import './UserDashboard.css';


class UserDashBoard extends Component {
  state={
    settings: {
      accountsDisplay: true,
      ProfileDisplay: false,
      AboutDisplay: false,
      NewStaffDisplay: false,
      AllAccountDisplay: false,
      TransactionDisplay: false,
      AnalyticsDisplay: false,
      ActivateDisplay: false
    }
  };

  notify = (msg) => toast.error(msg, {
    className: 'notify'
  });

  toggleState = (data) => {
    const newState = {
      accountsDisplay: false,
      ProfileDisplay: false,
      AboutDisplay: false,
      NewStaffDisplay: false,
      AllAccountDisplay: false,
      TransactionDisplay: false,
      AnalyticsDisplay: false,
      ActivateDisplay: false,
      ...data
    };
    this.setState({
      settings: newState
    });
  }

  showAccount = () => {
    this.toggleState({ accountsDisplay: true });
  }

  showProfile =() => {
    this.toggleState({ ProfileDisplay: true });
  }

  showTransaction =() => {
    this.toggleState({ TransactionDisplay: true });
  }

  showAbout = () => {
    this.toggleState({ AboutDisplay: true });
  }

  showNewStaff = () => {
    this.toggleState({ NewStaffDisplay: true });
  }

  showAllAccount = () => {
    this.toggleState({ AllAccountDisplay: true });
  }

  showAnalytics = () => {
    this.toggleState({ AnalyticsDisplay: true });
  }

  showActivates = () => {
    this.toggleState({ ActivateDisplay: true });
  }


  logout = () => {
    clearFromStorage();
    const { history } = this.props;
    if (history) history.push('/');
  }


  ComponentDidUpdate() {
    const { UserData } = this.props;
    if (UserData.Data.email == undefined) {
      this.props.history.push('/home');
    }
  }

  render() {
    const {
      accountsDisplay, ProfileDisplay, AboutDisplay, AllAccountDisplay,
      AnalyticsDisplay, ActivateDisplay, NewStaffDisplay, TransactionDisplay
    } = this.state.settings;
    const { UserData } = this.props;
    const { Data } = UserData;
    return (
      <div className="dashboard">
        <div className="user-aside">
          <div className="logo-holder">
            {' '}
            <div className="logo">B</div>
            {' '}
            <span className="logo-text">anka</span>
          </div>

          { Data.isadmin
            ? (
              <SideNav
  type="dashboard"
  items={[
    {
      text: 'Accounts',
      link: '/',
      style: 'NavItem',
      active: accountsDisplay,
      onclick: this.showAccount,
      imgurl: AccountImg
    },
    {
      text: 'Profile',
      link: '/profile',
      style: 'NavItem',
      active: ProfileDisplay,
      onclick: this.showProfile,
      imgurl: ProfileImg
    },
    {
      text: 'All account',
      link: '/',
      style: 'NavItem',
      active: AllAccountDisplay,
      onclick: this.showAllAccount,
      imgurl: AllAccountImg
    },
    {
      text: 'Transact',
      link: '/',
      style: 'NavItem',
      active: TransactionDisplay,
      onclick: this.showTransaction,
      imgurl: TransactImg
    },
    {
      text: 'Activate',
      link: '/',
      style: 'NavItem',
      active: ActivateDisplay,
      onclick: this.showActivates,
      imgurl: ActivateImg
    },
    {
      text: 'New Staff',
      link: '/',
      style: 'NavItem',
      active: NewStaffDisplay,
      onclick: this.showNewStaff,
      imgurl: LogoutImg
    },
    {
      text: 'Analytics',
      link: '/',
      style: 'NavItem',
      active: AnalyticsDisplay,
      onclick: this.showAnalytics,
      imgurl: LogoutImg
    },
    {
      text: 'Logout',
      link: '/',
      style: 'NavItem',
      onclick: this.logout,
      imgurl: LogoutImg
    }
  ]}
     />
            ) : (
              <SideNav
    type="dashboard"
    items={[
      {
        text: 'Accounts',
        link: '/',
        style: 'NavItem',
        active: accountsDisplay,
        onclick: this.showAccount,
        imgurl: AccountImg
      },
      {
        text: 'Profile',
        link: '/profile',
        style: 'NavItem',
        active: ProfileDisplay,
        onclick: this.showProfile,
        imgurl: ProfileImg
      },
      {
        text: 'About',
        link: '/profile',
        style: 'NavItem',
        active: AboutDisplay,
        onclick: this.showAbout,
        imgurl: TransactionImg
      },
      {
        text: 'Logout',
        link: '/',
        style: 'NavItem',
        onclick: this.logout,
        imgurl: LogoutImg
      }
    ]}
       />
            )}
        </div>
        <div className="user_dashboard">
          {accountsDisplay === true && <Account notify={this.notify} />}
          {ProfileDisplay === true && (<Profile UserData={UserData} />)}
          {AboutDisplay === true && (<About />)}
          {AllAccountDisplay === true && <AllUserAccount />}
          {TransactionDisplay === true && <Transaction notify={this.notify} />}
          {ActivateDisplay === true && <Activate notify={this.notify} />}
          {AnalyticsDisplay === true && <Analytics />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  const { UserData } = user;
  return {
    UserData
  };
};
export default connect(mapStateToProps)(withRouter(UserDashBoard));
