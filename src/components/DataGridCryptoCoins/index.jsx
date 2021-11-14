/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useEffect, useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { Launch } from '@material-ui/icons'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

/* import internal modules */
import AlertDialog from '../common/AlertDialog'
import DetailCryptoCoins from '../DetailCryptoCoins'
import { addCurrencyFormatUsd } from '../../utils/currencyFormat'
import { transformData } from '../../utils/transformDataCryptoCoins'

/** @description This is a functional component for data grid with cryptocurreny coins
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DataGridCryptoCoins
 *  @returns {Component} Returns the data grid with cryptocurreny coins component
 **/

const columns = [
  { field: 'symbol', headerName: 'Symbol', width: 140 },
  {
    field: 'name',
    headerName: 'Name',
    width: 190,
  },
  {
    field: 'rank',
    headerName: 'Rank',
    width: 190,
  },
  {
    field: 'price_usd',
    headerName: 'Price USD',
    width: 210,
    valueFormatter: ({ value }) => addCurrencyFormatUsd(value),
  },
  {
    field: 'market_cap_usd',
    headerName: 'Market Cap USD',
    width: 210,
    valueFormatter: ({ value }) => addCurrencyFormatUsd(value),
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 190,
    renderCell: (params) => [
      <AlertDialog
        key={params.row.id}
        title={`${params.row.name}`}
        contentText="Here are all the details about the cryptocurrency"
        iconOpenButton={
          <Tooltip title="Details" placement="top-start">
            <Launch color="primary" />
          </Tooltip>
        }
        data-cy="alertDialogDataGrid"
      >
        <DetailCryptoCoins informationCoin={params.row} />
      </AlertDialog>,
    ],
  },
]

const DataGridCryptoCoins = ({ coinsList }) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    transFormDataFunction()
  }, [coinsList])

  const transFormDataFunction = () => {
    if (coinsList) {
      const transformRows = transformData(coinsList)
      setRows(transformRows)
    }
  }

  return (
    <div style={{ height: 420, width: '100%' }}>
      <DataGrid
        rows={rows}
        pageSize={5}
        columns={columns}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbar,
        }}
        data-cy="dataGridCryptoCoins"
      />
    </div>
  )
}

export default DataGridCryptoCoins
