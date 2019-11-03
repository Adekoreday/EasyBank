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
  const accountcard=(props)=>{
    return(<div className="card__account">
              <div clasName="card__account-image"><img></img></div>
              <div className="card__account-content">content</div>
          </div>
          );
  }
  switch (props.type) {
    case 'homepage':
      template = hompagecard(props);
      break;
    case 'account':
      template = accountcard(props);
    default:
      template = null;
  }
  return template;
};
Card.propTypes = {
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired

}
export default Card;
