import React from 'react';

import './hero.css';

const Hero = (props) => (
  <div className="hero-container">
    <div className="text-container">
      <div className="hero-title">BANKA APP </div>
      <div className="hero-subtitle">
          Banka is a Lightweight banking application, which allows
          user to perfom banking operations
          such as creation of account, transaction history, balance check and many more...
      </div>
      <div className="getStarted" onClick={props.signInOpenModal}>Get Started</div>
    </div>

    <div className="hero2" />
  </div>
);


export default Hero;
