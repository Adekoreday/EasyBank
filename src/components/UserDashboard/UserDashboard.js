import React from 'react';
import SideNav from '../sideNav';
import './UserDashBoard.css';

/**
 * 
 {
    "status": 200,
    "Data": {
        "id": "6",
        "firstname": "Adeyemi",
        "lastname": "adekorede",
        "photo": null,
        "type": "client",
        "isadmin": false,
        "createdon": "2019-07-19T00:00:00.000Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkZXllbUBob3RtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsicG9zdEFjY291bnQiLCJhY2N0cmFuc2FjdGlvbmhpc3RvcnkiLCJ0cmFuc2FjdGlvbmJ5aWQiXSwiaWQiOiI2IiwiaWF0IjoxNTczNTQzNDQ4LCJleHAiOjE1NzM1NDcwNDh9.KdCVYHofiEq_tjGSzWdlLNJSM6r0lHs3rO6CQU7iN8U"
    }
}


 */

const UserDashBoard = () => (
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
  </div>
);
export default UserDashBoard;
