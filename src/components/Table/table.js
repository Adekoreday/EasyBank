import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Moment from 'react-moment';
import { useTable, usePagination } from 'react-table';
import Slider from '../slider/slider';
import './table.css';

const ReactTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <>
      <table>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination__item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </div>
        {' '}
        <div className="pagination__item" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </div>
        {' '}
        <div className="pagination__item" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </div>
        {' '}
        <div className="pagination__item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </div>
        {' '}
        <span>
          Page
          {' '}
          <strong>
            {pageIndex + 1}
            {' '}
of
            {pageOptions.length}
          </strong>
          {' '}
        </span>
        <span>
          | Go to page:
          {' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        {' '}
      </div>
    </>
  );
};

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Activate Accounts',
        columns: [
          {
            Header: 'S/N',
            accessor: 'no',
          },
          {
            Header: 'Account Number',
            accessor: 'accountnumber',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Created On',
            accessor: 'createdon',
          },
          {
            Header: 'Type',
            accessor: 'type',
          },
          {
            Header: 'Balance',
            accessor: 'balance',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Activate',
            accessor: 'activate',
          }
        ],
      },
    ],
    []
  );
  const allAccountSelector = (state) => state.account.allUsersAccount;
  const filteredAccount = createSelector(allAccountSelector, (allAccount) => {
    const filteredArray = allAccount.map((item, key) => ({
      no: ++key,
      accountnumber: item.accountnumber,
      email: item.email,
      createdon: <div><Moment format="YYYY/MM/DD" date={item.createdon} /></div>,
      type: item.type,
      balance: item.balance,
      status: item.status,
      activate: <Slider accountNumber={item.accountnumber} status={item.status} />
    }));
    return filteredArray;
  });
  const allAccount = useSelector((state) => filteredAccount(state));
  return (
    <div>
      <ReactTable columns={columns} data={allAccount} />
    </div>
  );
};

export default Table;
