import React from 'react';
import Card from '../card/card';
import Spinner from '../spinners/Spinner';
import Default from '../default';

const AllAccount = (props) => {
    console.log("all account props", props);
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
    <div className="allaccount">
    {(props.loading === true) && <Spinner/>}
    {(props.loading === false && props.isSuccess=== true)&& showAllAccount()}
    {(Object.keys(props.isfailedAllAccount).length > 0) && <Default />}
    </div>
    )
}

export default AllAccount;