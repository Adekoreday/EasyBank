import React from 'react';
import './default.css';
import DefImg from '../../images/icons/default.svg';

const Default = () => {
    return(
        <div className="defaultImg">
            <img src={DefImg}></img>
            <div>Session expired Kindly login</div>
        </div>
    )
}
export default Default;
