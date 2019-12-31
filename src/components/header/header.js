import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import SideNavigation from '../sideNav';
import './header.css';

const Header = (props) => {
  const { type, onOpenNav } = props;
  const Bars = () => (
    <FontAwesome
    name="bars"
    onClick={onOpenNav}
    style={{
      color: '#000000',
      padding: '10px',
      cursor: 'pointer'
    }}
    size="2x"
    />
  );
  const customHeader = () => {
    let template = null;
    switch (type) {
      case 'homepage':
        template = (
          <div className="nav-bar">
            <div className="mobile-nav">
              <SideNavigation
           {...props}
           items={[
             {
               type: 'option',
               icon: 'home',
               text: 'Home',
               link: '/'
             },
             {
               type: 'option',
               icon: 'file-text-o',
               text: 'ABOUT',
               link: '/user'
             },
             {
               type: 'option',
               icon: 'play',
               text: 'Videos',
               link: '/user'
             },
             {
               type: 'option',
               icon: 'sign-in',
               text: 'Sign in',
               link: '/user'
             },
             {
               type: 'option',
               icon: 'sign-out',
               text: 'Sign out',
               link: '/user'
             }
           ]}
          />
              {Bars()}
            </div>
            <div className="desktop-nav">
              <Link to="/terms"><div className="terms button">Terms </div></Link>
              <Link to="/about"><div className="about button">About</div></Link>
              <div className="login button" onClick={props.signInOpenModal}>
                LOG IN
              </div>
              <div className="signup button" onClick={props.signUpOpenModal}>
                SIGN UP
              </div>
            </div>
          </div>
        );
        break;
      default:
        template = 'not the case';
    }
    return template;
  };
  return (
    <div>
      { customHeader(type)}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  onOpenNav: PropTypes.func.isRequired

};

export default Header;
