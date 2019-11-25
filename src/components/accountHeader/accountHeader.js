import React from 'react';
import './accountHeader.css';

const AccountHeader = (props) => {
    const {items} = props;
    const showHeader =() => 
        items.map((item, i) => (
            <div key={i} className= {item.active ? "account__header--focus account__header" : "account__header"}
             onClick={item.onclick}
            >
            {item.text}
            </div>
        ));
   return (<div className="account__header__container">
    <div className="account__header__content">{showHeader()}</div>
    </div>
    )
}
export default AccountHeader;