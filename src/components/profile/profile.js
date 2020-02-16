import React from 'react';
import Moment from 'react-moment';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '../../images/icons/card.svg';

import './profile.css';

function stringToColor(string) {
  let hash = 0;
  let i;

  if (string) {
  /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  return 'none';
}

const useStyles = makeStyles(() => createStyles({
  root: {
    marginRight: '10px',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'none',
    fontSize: '32px'
  },
  auth: {
    cursor: 'pointer',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    fontSize: '14px'
  }
}));

const Profile = (props) => {
  let {
    firstname, lastname, email, createdon, photo
  } = props.UserData.Data;
  const classes = useStyles();
  const style = {
    color: '#FFFFFF',
    background: `${stringToColor(firstname)}`
  };
  return (
    <div className="profile__content">
      <div className="profile__pix">
        <Avatar
        alt={`${firstname} image`}
        src={firstname}
        className={classes.root}
        style={style}
      />
      </div>
      <div className="profile__details">
        <h2 className="profile__name">{`${firstname}    ${lastname}`}</h2>
        <h5 className="profile__item">{email}</h5>
        <h4 className="profile__item">
          <span>Joined:</span>
          {' '}
          <Moment format="YYYY/MM/DD" date={createdon} />
        </h4>
        <div className="card__data">
          <img alt="card" src={Card} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
