/* import external modules */
import {
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from '@material-ui/core'
import PropTypes from 'prop-types'

const headCells = [
  {
    id: 'symbol',
    numeric: false,
    disablePadding: false,
    label: 'Symbol',
  },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'rank', numeric: false, disablePadding: false, label: 'Rank' },
  {
    id: 'price_usd',
    numeric: false,
    disablePadding: false,
    label: 'Price USD',
  },
  {
    id: 'market_cap_usd',
    numeric: false,
    disablePadding: false,
    label: 'Market Cap USD',
  },
  {
    id: 'option',
    numeric: false,
    disablePadding: false,
    label: 'Options',
  },
]

const TableCryptoCoinsHead = (props) => {
  const { order, orderBy, classes, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableCryptoCoinsHead.propTypes = {
  classes: PropTypes.object.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
}

export default TableCryptoCoinsHead
