import React from 'react';
import './SideNav.css';

const SideNav = (props) => {``
    const {items} = props;
    const showItem = () => 
        items.map((item, i) => (
            <div key={i} className="options">
            {item.text}
            </div>
        ));
return (
        <div>
        {showItem()}
        </div>
    );
}

export default SideNav;