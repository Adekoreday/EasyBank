import React, {Component} from 'react';
import SideNav from '../sideNav';
import Account from '../account/account';
import Profile from '../profile/profile';
import About from '../about/about';
import { connect } from 'react-redux';
import AccountImg from '../../images/icons/ecommerce_graph2.svg';
import ProfileImg from '../../images/icons/perm_identity-24px.svg';
import TransactionImg from '../../images/icons/ecommerce_dollar.svg';
import NavigationImg from '../../images/icons/ecommerce_dollar.svg';
import { withRouter } from 'react-router-dom';
import './UserDashboard.css';


class UserDashBoard extends Component  {

  state={
    settings: {
      accountsDisplay: true,
      ProfileDisplay: false,
      AboutDisplay: false,
      likesDisplay: false
    }
  };

  toggleState = (data) => {
    const newState = {
      accountsDisplay: false,
      ProfileDisplay: false,
      AboutDisplay: false,
      likesDisplay: false,
      ...data
    }
    this.setState({
       settings: newState
    })
  }

  showAccount = () => {
    this.toggleState({accountsDisplay: true});
  }
  showProfile =() => {
    this.toggleState({ProfileDisplay: true});
  }

  showAbout = () => {
    this.toggleState({AboutDisplay: true});
  }


  ComponentDidUpdate() {
    const {UserData} = this.props;
     if(UserData.Data.email == undefined) {
      this.props.history.push('/home');
     }
  }

render() {
  const {
    accountsDisplay, ProfileDisplay, AboutDisplay, likesDisplay
  } = this.state.settings;
  const {UserData} = this.props;
  return(
    <div className="dashboard">
    <div className="user-aside">
    <div className="logo-holder"> <div className="logo">B</div> <span className="logo-text">anka</span></div>

    <SideNav
  items ={[
      {
        text: 'Accounts',
        link: '/profile',
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
      }
    ]}
    ></SideNav>
  </div>
  <div className="user_dashboard">
    {accountsDisplay === true && <Account/>}
    {ProfileDisplay === true && (<Profile UserData={UserData}/>)}
    {AboutDisplay === true && (<About />)}
  </div>
  </div>)
};
}

const mapStateToProps = (state) => {
  const { user } = state;
  const {UserData} = user;
  return {
    UserData
  };
}
export default connect(mapStateToProps)(withRouter(UserDashBoard));
