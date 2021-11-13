/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

/* import internal modules */
import { transformData } from '../../utils/transformDataCryptoCoins'

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
  },
  {
    field: 'market_cap_usd',
    headerName: 'Market Cap USD',
    width: 210,
  },
  {
    field: 'options',
    headerName: 'Options',
    width: 200,
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        pageSize={5}
        columns={columns}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  )
}

export default DataGridCryptoCoins
