import React from 'react';
import './bottom.css';
import Card from '../card/card';
import Register from '../../images/icons/register.svg';
import Bank from '../../images/icons/bank.svg';

const Bottom = () => (
  <div className="bottom">
    <Card
          type="homepage"
            title="REGISTER"
            imgurl={Register}
            />
    <Card
          type="homepage"
            title="SAVE"
            imgurl={Bank} />
    <Card
          type="homepage"
          title="BANK"
          imgurl={Bank}
          />
  </div>
);
export default Bottom;
