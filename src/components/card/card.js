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
  switch (props.type) {
    case 'homepage':
      template = hompagecard(props);
      break;
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
