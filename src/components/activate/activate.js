import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import Table from '../Table/table';
import Modal from '../modal/modal';
import { getAllUsersAccount, activateAccount } from '../../action/account';
import { closeModal } from '../../action/modal';
import Spinner from '../spinners/Spinner';
import Default from '../default';
import './activate.css';


export default function Activate(props) {
  const dispatch = useDispatch();
  const activateData = useSelector((state) => state.modal.activateData);
  useLayoutEffect(
    () => { dispatch(getAllUsersAccount()); }, []
  );

  const handleClick = () => {
    dispatch(activateAccount(activateData));
  };
  const CloseModal = () => {
    dispatch(closeModal());
  };
  const loading = useSelector((state) => state.account.isallUserAccountLoading);
  const isSucess = useSelector((state) => state.account.isSuccessAllUsersAccount);
  const isactivateAccountSucess = useSelector((state) => state.account.isactivateAccountSucess);
  const activateAccounts = useSelector((state) => state.account.activateAccount);
  const isfailedAllAccount = useSelector((state) => state.account.isfailedAllUsersAccounts);
  const modalStatus = useSelector((state) => state.modal.modalStatus);
  const activateAccountLoading = useSelector((state) => state.account.activateAccountLoading);

  return (
    <div className="activate__account__content">

      {(modalStatus) && (
      <Modal closeModal={CloseModal}>
        { activateData !== null && (
        <div className="activate__modal">
          <div className="activate__modal__content">
            <div>
              {(activateAccounts !== null)
                ? (activateAccounts.accountNumber === activateData.accountNumber
                  ? (isactivateAccountSucess ? <span className="sucess__request">account sucessfully updated</span>
                    : (
                      <span className="failure_request">
                        {activateAccounts.status}
                        {' '}
                            action on account failed
                      </span>
                    )
                  ) : '') : ''}
            </div>
          Kindly confirm the
            {' '}
            {activateData.status === 'active' ? <span className="deactivate">deactivate</span> : <span className="activate">activate</span>}
          action on account:
            {' '}
            {activateData.accountNumber}
          </div>
          <div />
          <div className="button confirm-button" onClick={handleClick}>{(activateAccountLoading == false) ? 'Confirm' : 'loading..'}</div>
        </div>
        ) }
      </Modal>
      )}
      {(loading === true) && <Spinner />}
      {(loading === false & isSucess) ? <Table notify={props.notify} /> : ''}
      {(Object.keys(isfailedAllAccount).length > 0) && <Default />}
    </div>
  );
}
