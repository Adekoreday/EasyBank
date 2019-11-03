import React from 'react';
import './SideNav.css';

const SideNav = (props) => {``
    const {items} = props;
    const showItem = () => 
        items.map((item, i) => (
            <div key={i} className="options">
                 <img className="option__icon" src={item.imgurl} alt="card img" />
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