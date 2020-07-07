import React from 'react';
import './about.css';

const About = () => {
  return(
    <div className="about__content">
      <h2 className="header">EASY BANK</h2>
      <div className="">Easy bank is a light weight banking application designed to support small scale to medium banking
        operations.
        <div className="sub__content">Users are expected to be able to do the following on banka </div> 
      </div>
      <ul className="items__group">
        <li className="list__item">Create an account</li>
        <li className="list__item">View transactions history on each account</li>
        <li className="list__item">View the status of each account they operate</li>
        <li className="list__item">View their account balance </li>
      </ul>
    </div>
  ) 
}
export default About;