import React, {Component} from 'react';
import SideNav from '../sideNav';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './UserDashBoard.css';


class UserDashBoard extends Component  {

  state={
    accountsDisplay: true,
    ProfileDisplay: false,
    Transaction: false,
    likesDisplay: false
  };
    
  ComponentDidUpdate() {
    const {UserData} = this.props;
     if(UserData.Data.email == undefined) {
      this.props.history.push('/home');
     }
  }

render() {
  return(
  <div className="user_dashboard">
    <div className="user-aside">
      <div className="logo-holder"> <div className="logo">B</div> <span className="logo-text">anka</span></div>

      <SideNav
    items ={[
        {
          text: 'Accounts',
          link: '/profile',
          style: 'NavItem',
          imgurl: '../../images/icons/ecommerce_graph2.svg' 
        },
        {
          text: 'Profile',
          link: '/profile',
          style: 'NavItem',
          imgurl: '../../images/icons/perm_identity-24px.svg'
        },
        {
          text: 'Transaction',
          link: '/profile',
          style: 'NavItem',
          imgurl: '../../images/icons/ecommerce_dollar.svg' 
        }
      ]}
      ></SideNav>
    </div>
    <div className="user-main"> main dashboard</div>
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
