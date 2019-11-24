import React from 'react';
import PropTypes from 'prop-types';
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

  /*
  accountnumber: "5282957493"
balance: 2000
createdon: "2019-06-28T00:00:00.000Z"
id: "5"
status: "active"
type: "savings"
user_id: "1"
  */
  const accountcard=(props)=>{
    const {details} = props;
    const {accountnumber, balance, createdon, status, type} = details;
    return(<div className="account__card">
             <div className="account__card__caption">{type[0]}</div>
             <div className="account__card__content">
               <div>Account no</div>
               <div><div>Balance</div> <div>status</div> <div>created</div></div>
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
