import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './sideNav.css';

const SideNavItems = (props) => {
  const { items } = props;
  const showItems = () => {
    return items.map((item, i) =>{
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };


  return (
    <div>
      {showItems()}
    </div>
  );
};

SideNavItems.propTypes = {
  items: PropTypes.array.isRequired
};


export default SideNavItems;
