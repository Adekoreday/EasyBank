import React from 'react';
import './sideNav.css';

const SideNav = (props) => {
    const {items} = props;
    const showItem = () => 
        items.map((item, i) => (
            <div key={i} className= {item.active ? "options options--focus": "options"} onClick={item.onclick}>
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