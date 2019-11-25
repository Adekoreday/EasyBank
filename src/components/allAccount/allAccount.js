import React from 'react';
import Card from '../card/card';

const AllAccount = (props) => {
    const {allAccount} = props;
    const showAllAccount =() => 
    allAccount.map((item, i) => (
        <div key={i}>
        <Card details={
         item}
         type='account'
         />
        </div>

    ));
    return (
    <div className="allaccount">{showAllAccount()}</div>
    )
}

export default AllAccount;