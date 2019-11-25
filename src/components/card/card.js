import React from 'react';
import PropTypes from 'prop-types';
import AccountImage from '../../images/icons/account.svg';
import BalanceImg from '../../images/icons/balance.svg';
import Created from '../../images/icons/created.svg';
import Status from '../../images/icons/status.svg';
import Moment from 'react-moment';
import './card.css';


const Card = (props) => {
  let template = null;
  const hompagecard = () => {
    const { imgurl, title } = props;
    return (
      <div className="card">
        <img src={imgurl} alt="card img" />
        <div>{ title }</div>
      </div>
    );
  };
  const accountcard=(props)=>{
    const {details} = props;
    const {accountnumber, balance, createdon, status, type} = details;
    return(<div className="account__card">
             <div className={type[0] === 's' ? "savings account__card__caption " : "account__card__caption"}><div className="account__card__caption__text">{type[0]}</div></div>
             <div className="account__card__content">
               <div className="account__balance"> <img className="account__card__image"  src={AccountImage} alt="card img" /> <ul className="item__list"><li>Account No</li>{accountnumber}<li></li></ul></div>
               <div className="account__card__details">
                 <div><div className="card__item"><img className="account__card__image" src={BalanceImg} alt="card img" /> <ul className="item__list"><li>Balance</li>{`#${balance}`}<li></li></ul></div>
                 </div>
                 <div className="account__balance"> <img className="account__card__image"  src={Status} alt="card img" /> <ul className="item__list"><li>status</li>{status}<li></li></ul></div>
                 <div className="account__balance">  <img className="account__card__image"  src={Created} alt="card img" /> <ul className="item__list"><li>Created</li><Moment format="YYYY/MM/DD" date={createdon} >
                 </Moment><li></li></ul></div>
                </div>
             </div>
          </div>
          );
  }
  switch (props.type) {
    case 'homepage':
      template = hompagecard(props);
      break;
    case 'account':
      template = accountcard(props);
      break
    default:
      template = null;
  }
  return template;
};
Card.propTypes = {
  imgurl: PropTypes.string,
  title: PropTypes.string

}
export default Card;
