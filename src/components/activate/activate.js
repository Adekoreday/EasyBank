import React, {useEffect} from 'react';
import Table from '../Table/table';
import {getAllUsersAccount}  from '../../action/account';
import Spinner from '../spinners/Spinner';
import Default from '../default';
import { useDispatch, useSelector } from "react-redux";
import './activate.css';


export default function Activate() {
    const dispatch = useDispatch();
     useEffect(
      () => {dispatch(getAllUsersAccount())}, []
    )
    const loading = useSelector(state => state.account.isallUserAccountLoading);
    const isSucess = useSelector(state => state.account.isSuccessAllUsersAccount);
    const isfailedAllAccount = useSelector( state => state.account.isfailedAllUsersAccounts);

    return (
        <div className="activate__account__content">
        {(loading === true) && <Spinner />}
        {(loading === false & isSucess ) ? <Table /> : ''}
        {(Object.keys(isfailedAllAccount).length > 0) && <Default />}
        </div>
    )
}

