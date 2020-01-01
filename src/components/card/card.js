import React from 'react';
import PropTypes from 'prop-types';
import AccountImage from '../../images/icons/account.svg';
import BalanceImg from '../../images/icons/balance.svg';
import NairaImg from '../../images/icons/naira.svg';
import Clock from '../../images/icons/clock.svg';
import PreviousImg from '../../images/icons/previous.svg';
import TransactionImg from '../../images/icons/transaction.svg';
import Status from '../../images/icons/status.svg';
import { Link } from 'react-router-dom';
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
    return(
      <Link to={`account?accountNumber=${accountnumber}&createdon=${createdon}&status=${status}&type=${type}`}>
    <div className="account__card">
             <div className={type[0] === 's' ? "savings account__card__caption " : "account__card__caption"}><div className="account__card__caption__text">{type[0]}</div></div>
             <div className="account__card__content">
               <div className="account__balance"> <img className="account__card__image"  src={AccountImage} alt="card img" /> <ul className="item__list"><li>Account No</li>{accountnumber}<li></li></ul></div>
               <div className="account__card__details">
                 <div><div className="card__item"><img className="account__card__image" src={BalanceImg} alt="card img" /> <ul className="item__list"><li>Balance</li>{`#${balance}`}<li></li></ul></div>
                 </div>
                 <div className="account__balance"> <img className="account__card__image"  src={Status} alt="card img" /> <ul className="item__list"><li>status</li>{status}<li></li></ul></div>
                 <div className="account__balance">  <img className="account__card__image"  src={Clock} alt="card img" /> <ul className="item__list"><li>Created</li><Moment format="YYYY/MM/DD" date={createdon} >
                 </Moment><li></li></ul></div>
                </div>
             </div>
          </div>
          </Link>
          );
  }
  const transactionCard=(props) => {
    const {accountNumber, types, status, createdon} = props;
    return(
      <div className="transaction__card">
          <div className={types[0] === 's' ? "savings transaction__card__caption account__card__caption " : "transaction__card__caption account__card__caption"}><div className="transaction__card__caption__text">{types[0]}</div></div>
        <div className="transaction__card__details">
        <div className="transaction__header">ACCOUNT NO: {`${accountNumber}`}</div>
        <div className="transaction__item"><span>Type: </span><span>{types}</span></div>
        <div className="transaction__status transaction__item"><span>Status: </span>{status}</div>
        <div className="transaction__item"><span>Created: </span> <Moment format="YYYY/MM/DD" date={createdon}/></div>
        </div>
      </div>
    )
  }
  const transactionDetailsCard=(props)=>{
    const {accountTransact} = props;
    return(
      <div>
    {accountTransact.map((x, i) => (
    <div className="transaction__card__history" key={i}>
        <div className="account__balance__transact">
          <div className="balance__img"><img className="account__card__image--medium"  src={AccountImage} alt="card img"  /><span>Balance</span></div>
          <div className="balance"><img src={NairaImg} className="account__card__image--medium" alt="naira img"  />{x.newbalance}</div>
        </div>
        <div>

          <div className="balance__img"><img src={PreviousImg} className="account__card__image" alt="transaction img" />Previous Balance
          <div><img src={NairaImg} className="account__card__image" alt="transaction img" />{x.oldbalance}</div></div>
          <div className="balance__img"><img src={TransactionImg} className="account__card__image" alt="transaction img"  />{x.newbalance > x.oldbalance ? 'credit' : 'debit'}
          <div><img src={NairaImg} className="account__card__image" alt="naira img" />{x.amount}</div></div>
          <div className="balance__img"><img src={Clock} className="account__card__image" alt="clock img" />{x.createdon}</div>
        </div>
    </div>
    ))}
    </div>
    )
  }

  switch (props.type) {
    case 'homepage':
      template = hompagecard(props);
      break;
    case 'account':
      template = accountcard(props);
      break
    case 'transaction':
      template = transactionCard(props);
      break;
    case 'transactionDetails':
      template = transactionDetailsCard(props);
      break;
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
