/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Paper,
  Table,
  Switch,
  Tooltip,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@material-ui/core'
import { Launch } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

/* import internal modules */
import { useStyles } from './styles'
import TableCryptoCoinsHead from './Head'
import TableCryptoCoinsToolbar from './Toolbar'
import AlertDialog from '../common/AlertDialog'
import { transformData } from '../../utils/transformDataCryptoCoins'

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const TableCryptoCoins = ({ coinsList }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rows, setRows] = useState([])
  const [dense, setDense] = useState(false)
  const [order, setOrder] = useState('asc')
  const [selected, setSelected] = useState([])
  const [orderBy, setOrderBy] = useState('rank')
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    transFormDataFunction()
  }, [coinsList])

  const transFormDataFunction = () => {
    if (coinsList) {
      const transformRows = transformData(coinsList)
      setRows(transformRows)
    }
  }

  const addCurrencyFormatUsd = (amount) => {
    const optionCurrencyUSD = { style: 'currency', currency: 'USD' }
    const numberPriceUsdFormat = new Intl.NumberFormat(
      'en-US',
      optionCurrencyUSD
    )
    const priceUsdFormat = numberPriceUsdFormat.format(amount)

    return priceUsdFormat
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows?.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableCryptoCoinsToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <TableCryptoCoinsHead
              order={order}
              classes={classes}
              orderBy={orderBy}
              rowCount={rows.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.symbol}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                    >
                      <TableCell
                        scope="row"
                        id={labelId}
                        component="th"
                        padding="normal"
                      >
                        {row.symbol}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.rank}</TableCell>
                      <TableCell align="left">
                        {addCurrencyFormatUsd(row.price_usd)}
                      </TableCell>
                      <TableCell align="left">
                        {addCurrencyFormatUsd(row.market_cap_usd)}
                      </TableCell>
                      <TableCell align="left">
                        <AlertDialog
                          title={`${row.name}`}
                          iconOpenButton={
                            <Tooltip title="Details" placement="top-start">
                              <Launch color="primary" />
                            </Tooltip>
                          }
                        >
                          <p>{'row'}</p>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  )
}

export default TableCryptoCoins
