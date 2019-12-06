import React from 'react';
import Moment from 'react-moment';
import User from '../../images/icons/user.svg';
import Card from '../../images/icons/card.svg';

import './profile.css';

const Profile = (props) => {
    const {firstname, lastname, email, createdon, photo} = props.UserData.Data;
return(
  <div className="profile__content">
    <div className="profile__pix"><img src={photo==='' ? User: photo}></img></div>
    <div className="profile__details">
        <h2 className="profile__name">{`${firstname}    ${lastname}`}</h2>
        <h4 className="profile__item">{email}</h4>
        <h4 className="profile__item"><span>Joined:</span> <Moment format="YYYY/MM/DD" date={createdon}/></h4>
        <div className="card__data">
            <img src={Card}></img>
        </div>
    </div>
    </div>
    )
}
export default Profile;