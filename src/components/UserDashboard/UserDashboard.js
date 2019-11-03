import React from 'react';
import SideNav from '../sideNav';
import './UserDashBoard.css';

const UserDashBoard = () => (
  <div className="user_dashboard">
    <div className="user-aside">
      <div className="logo-holder"> <div className="logo">B</div> <span className="logo-text">anka</span></div>

      <SideNav
    items ={[
        {
          text: 'Accounts',
          link: '/profile',
          style: 'NavItem'
        },
        {
          text: 'Profile',
          link: '/profile',
          style: 'NavItem'
        },
        {
          text: 'Transaction',
          link: '/profile',
          style: 'NavItem'
        }
      ]}
      ></SideNav>
    </div>
    <div className="user-main"> main dashboard</div>
  </div>
);
export default UserDashBoard;
