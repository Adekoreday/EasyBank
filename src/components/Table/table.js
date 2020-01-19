import React, {useEffect, useCallback} from 'react';
import { useSelector } from "react-redux";
import Slider from '../slider/slider';
import { createSelector } from 'reselect';
import Moment from 'react-moment';
import Default from '../default';
import { useTable, usePagination } from 'react-table';
import './table.css';

const ReactTable = ({ columns, data}) => {
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
      )
      return (
    <>
    <table>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
    </table>
    <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
      </div>
    </>
      )
}

const Table  = () => {
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
      const allAccountSelector = state => state.account.allUsersAccount
      const filteredAccount = createSelector(allAccountSelector, (allAccount) => {
      var filteredArray =  allAccount.map((item, key)=> ({
        no: ++key,
        createdon: <div><Moment format="YYYY/MM/DD" date={item.createdon}></Moment></div>,
        type: item.type,
        balance: item.balance,
        status: item.status,
      activate: <Slider />
      }))
          return filteredArray;
        });
      const allAccount = useSelector(state => filteredAccount(state));
     return (
    <div>
    <ReactTable columns={columns} data={allAccount}/>
    </div>
    )
}

export default Table;