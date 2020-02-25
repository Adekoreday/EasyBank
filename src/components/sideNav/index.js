import React from 'react';
import { Link } from 'react-router-dom';
import './sideNav.css';

const SideNav = (props) => {
  let template = null;
  const { items } = props;
  const showItem = (items) => items.map((item, i) => (
    <div key={i} className={item.active ? 'options options--focus' : 'options'} onClick={item.onclick}>
      <img className="option__icon" src={item.imgurl} alt="card img" />
      <span className="item__name">{item.text}</span>
    </div>
  ));

  const showMobileNav = (items) => (
    <header className="headers">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
      <ul className="menu">
        <li onClick={props.signUpOpenModal}><a>Sign up</a></li>
        <li onClick={props.signInOpenModal}><a>Login</a></li>
        <li><Link to="/terms">Terms</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  );


  switch (props.type) {
    case 'dashboard':
      template = showItem(items);
      break;
    case 'homepage':
      template = showMobileNav(items);
      break;
    default:
      template = null;
  }
  return (
    <div>
      {template}
    </div>
  );
};

export default SideNav;
