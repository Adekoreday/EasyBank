import React from 'react';
import PropTypes from 'prop-types';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_item';

const SideNavigation = (props) => {
  const { showNav, onCloseNav } = props;
  return (
    <div>
      <SideNav
          showNav={showNav}
          onHideNav={onCloseNav}
          navStyle={{
            background: '#242424',
            maxWidth: '220px'
          }}
            >
        <SideNavItems
        {...props} />
      </SideNav>
    </div>
  );
};
SideNavigation.propTypes = {
  showNav: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};
export default SideNavigation;
