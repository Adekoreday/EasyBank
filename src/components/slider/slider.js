import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {reportActivateModalDetails} from '../../action/account';
import {openModal} from '../../action/modal';
import './slider.css';

export default function Slider(props) {
    const {status, accountNumber} = props;
    const dispatch = useDispatch(); 
    const [isChecked, setisChecked] = useState(status === 'active' ? true : false);
    const handleCheck = (e) => {
        e.preventDefault();
        dispatch(reportActivateModalDetails({status,accountNumber }))
        dispatch(openModal());
      };
     const activateAccount = useSelector(state => state.account.activateAccount);
    if(activateAccount !== null){
          if(activateAccount.accountNumber === accountNumber & status !== activateAccount.status){
                const stats = activateAccount.status === 'active' ? true : false;
                if(isChecked !== stats){
                    setisChecked(stats);
                }
            }
    }
    return (
<label className="switch"> <input  type="checkbox" name="checkbox" onChange={handleCheck} checked={isChecked}/><span className="slider round"></span> </label>
    )
}
